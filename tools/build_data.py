"""
Builds data.js (and FILES-NEEDED.txt) for Crystal Play from the content below.
You do NOT need to run this. It is here so the content can be changed and data.js rebuilt:
    python tools/build_data.py        (run it from the crystal-play folder)
"""
import json, os, re, math

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STAGE_SIZE = 5          # sounds per stage
TOPIC_PART = 10         # max words in one word stage
REVIEW_EVERY = 3        # a Review after every 3 stages

def slug(w): return re.sub(r"[^a-z0-9]+", "-", w.lower().replace("&", "and")).strip("-")
def S(id_, label, gs, words): return dict(id=id_, label=label, gs=gs, words=words.split())
def L1(c, words): return S(c, c.upper() + c, [c], words)          # one letter

# ------------------------------------------------------------------ sounds
A_SOUNDS = [L1("a","apple"), L1("b","book"), L1("c","cat"), L1("d","dog"), L1("e","elephant"), L1("f","fish"), L1("g","girl"),
  L1("h","horse"), L1("i","ice-cream"), L1("j","jar"), L1("k","key kite"), L1("l","lion"), L1("m","mouse"), L1("n","nest net neck"),
  L1("o","orange on old"), L1("p","pig pan panda pencil"), L1("q","queen quiet"), L1("r","rat rabbit run"), L1("s","star sun sad"),
  L1("t","teacher toy ten"), L1("u","unicorn up under umbrella"), L1("v","van vet vase"), L1("w","whale window wash watch"),
  L1("x","fox box ox"), L1("y","yellow young yoyo"), L1("z","zoo zip zebra")]

B_SOUNDS = [L1("s","sun son sky"), L1("a","apple arm ant"), L1("t","tie tree teddy"), L1("i","ink ice in"), L1("p","pan panda pen"),
  L1("n","nest net neck"), S("ck","Cc / Kk",["c","k"],"car cat key kite"), L1("e","egg ear elephant"), L1("h","hat hand horse"),
  L1("r","rabbit radio red"), L1("m","mug mouth monkey"), L1("d","drum dog door"), L1("g","garden girl glass"), L1("o","orange on off"),
  L1("l","leg lion lamp"), L1("u","umbrella up gum"), L1("f","face fork fan"), L1("b","book ball bag"),
  S("ai","ai",["ai"],"nail rain train"), L1("j","jar jam jump"), S("oa","oa",["oa"],"coat goat boat"),
  S("ie","ie",["ie"],"tie pie fries"), S("ee","ee",["ee"],"bee see sweet"), S("or","or",["or"],"horse fork corn")]

C_EXTRA = [L1("z","zoo zip zebra"), L1("w","window wall wood"), S("ng","ng",["ng"],"ring wing swing"), L1("v","van vet vase"),
  S("oo","oo",["oo"],"moon spoon broom"), L1("y","yoyo yogurt yellow"), L1("x","fox box fix"), S("ch","ch",["ch"],"chair chocolate child"),
  S("sh","sh",["sh"],"shark short shirt"), S("th","th",["th"],"thin throw three mother father feather"),
  S("qu","qu",["qu"],"quiet queen question"), S("ou","ou",["ou"],"mouth house cloud"), S("oi","oi",["oi"],"oil soil boil"),
  S("ue","ue",["ue"],"blue glue true"), S("er","er",["er"],"her sister winter"), S("ar","ar",["ar"],"car far jar")]
C_SOUNDS = B_SOUNDS + C_EXTRA

SAY = dict(a="ah",b="buh",c="kuh",d="duh",e="eh",f="fff",g="guh",h="huh",i="ih",j="juh",k="kuh",l="lll",m="mmm",n="nnn",o="oh",p="puh",
  q="kwuh",r="rrr",s="sss",t="tuh",u="uh",v="vvv",w="wuh",x="ks",y="yuh",z="zzz",ck="kuh",ai="ay",oa="oh",ie="eye",ee="ee",
  **{"or":"or"},ng="ing",oo="oo",ch="chuh",sh="shh",th="thuh",qu="kwuh",ou="ow",oi="oy",ue="oo",er="er",ar="ar")

# ------------------------------------------------------------------ word topics (Level C)
TOPICS = [  # key, title, odd phrase, words, "far" topics used for the odd-one-out
 ("animals","Animals","an animal","bee bird cat hen cow crocodile dog donkey duck fish elephant frog giraffe goat hippo horse lizard monkey mouse bear sheep snake crab tiger zebra","transport clothes home school toys"),
 ("body","Body and face","part of the body","arm ear eye face feet hand mouth nose teeth","transport food home school animals"),
 ("family","Family and friends","a family member","baby brother sister father grandma grandpa mother","animals food transport home toys"),
 ("food","Food and drink","food or drink","apple banana bread burger carrot chicken fries chocolate egg fish ice-cream lemon-juice","transport clothes home school toys body"),
 ("transport","Transport","transport","bus car truck boat motorbike plane ship train","animals food body clothes family school"),
 ("toys","Toys","a toy","ball balloon puzzle tablet robot doll","animals food body family"),
 ("time","Time","a time of day","afternoon morning night","animals food transport clothes"),
 ("sports","Sports and hobbies","a sport or hobby","draw basketball racket bicycle jump football kite piano run sing throw read","animals food body family clothes"),
 ("clothes","Clothes","clothes","bag cap dress glasses handbag jacket trousers shirt shoes shorts skirt socks jeans t-shirt watch","animals food transport body family"),
 ("home","The home","in the home","armchair bathtub bathroom bed bedroom box camera chair clock door flower stairs garden lamp mat mirror photo radio sofa table tree wall window","animals food transport body family"),
 ("school","School","in school","board book paint crayons eraser paper pen pencil ruler school wrong right","animals food transport body family"),
]
BANNED_ODD = {"fish","chicken","egg","ball","kite","watch","bag"}

DISPLAY = {"ice-cream": "ice cream", "lemon-juice": "lemon juice", "t-shirt": "T-shirt"}
def label(w): return DISPLAY.get(w, w)

def chunk(items, size):                         # split into the fewest balanced parts of at most `size`
    n = max(1, math.ceil(len(items) / size)); base, extra = divmod(len(items), n); out = []; i = 0
    for k in range(n):
        m = base + (1 if k < extra else 0); out.append(items[i:i+m]); i += m
    return out

def stage_groups(sounds):                       # groups of 5; a last group smaller than 3 joins the previous one
    g = [sounds[i:i+STAGE_SIZE] for i in range(0, len(sounds), STAGE_SIZE)]
    if len(g) > 1 and len(g[-1]) < 3:
        last = g.pop(); g[-1] = g[-1] + last
    return g

def pos_of(gs, words):
    if all(any(w.startswith(g) for g in gs) for w in words): return "start"
    if all(any(w.endswith(g) for g in gs) for w in words): return "end"
    return "any"

def sound_item(sp):
    words = []
    for w in sp["words"]:
        g = next((g for g in sp["gs"] if w.startswith(g)), None) or next((g for g in sp["gs"] if w.endswith(g)), None) or next(g for g in sp["gs"] if g in w)
        words.append([w, g])
    return dict(id=sp["id"], label=sp["label"], gs=sp["gs"], pos=pos_of(sp["gs"], sp["words"]), words=words)

def add_reviews(nodes, section_nodes_idx, kind):
    """nodes: list being built; section_nodes_idx: indexes of stage nodes of one section, in order."""
    out, since = [], []
    for n, i in enumerate(section_nodes_idx):
        since.append(i)
        last = n == len(section_nodes_idx) - 1
        if len(since) == REVIEW_EVERY or (last and len(since) >= 2):
            out.append((i, list(since))); since = []
    return out

def build_level(sections):
    nodes, stage_no = [], 0
    for sec in sections:
        stage_idx = []
        entries = []   # (kind-specific payload)
        if sec["type"] == "sounds":
            for grp in stage_groups(sec["sounds"]): entries.append(("sounds", grp))
        else:
            for key, title, odd, words, far in sec["topics"]:
                ws = words.split(); parts = chunk(ws, TOPIC_PART)
                far_words = [w for k2, t2, o2, w2, f2 in sec["topics"] if k2 in far.split() for w in w2.split() if w not in BANNED_ODD]
                for pi, part in enumerate(parts):
                    entries.append(("words", dict(key=key, title=title + (f" {pi+1}/{len(parts)}" if len(parts) > 1 else ""), odd=odd, words=part, all=ws, pool=far_words)))
        review_after = {}
        # decide reviews
        idxs = list(range(len(entries)))
        for i, grp in add_reviews(None, idxs, None): review_after[i] = grp
        node_of = {}
        for ei, (kind, payload) in enumerate(entries):
            stage_no += 1
            if kind == "sounds":
                items = [sound_item(sp) for sp in payload]
                nodes.append(dict(kind="sounds", title=f"Stage {stage_no}", sub=" ".join(sp["label"] for sp in payload),
                                  section=sec["title"], items=items))
            else:
                nodes.append(dict(kind="words", title=payload["title"], sub=", ".join(label(w) for w in payload["words"][:5]) + ("..." if len(payload["words"]) > 5 else ""),
                                  section=sec["title"], words=payload["words"], topicAll=payload["all"], odd=payload["odd"], oddPool=payload["pool"]))
            node_of[ei] = len(nodes) - 1
            if ei in review_after:
                covers = [node_of[j] for j in review_after[ei]]
                nodes.append(dict(kind="rsounds" if kind == "sounds" else "rwords", title="Review", sub="Mix of the last stages", section=sec["title"], covers=covers))
    return nodes

LEVELS = {
 "A": dict(name="Level A", color="#4ade80", cover="assets/frontA.jpg", blurb="The letters from A to Z",
           sections=[dict(title="Letters", type="sounds", sounds=A_SOUNDS)]),
 "B": dict(name="Level B", color="#60a5fa", cover="assets/frontB.jpg", blurb="Sounds and words",
           sections=[dict(title="Sounds", type="sounds", sounds=B_SOUNDS)]),
 "C": dict(name="Level C", color="#fbbf24", cover="assets/frontC.jpg", blurb="Sounds, words and topics",
           sections=[dict(title="Sounds", type="sounds", sounds=C_SOUNDS), dict(title="Words", type="topics", topics=TOPICS)]),
}

def main():
    out_levels, words, sounds = {}, set(), {}
    for k, spec in LEVELS.items():
        nodes = build_level(spec["sections"])
        for n in nodes:
            if n["kind"] == "sounds":
                for it in n["items"]:
                    sounds[it["id"]] = dict(file=f"audio/sounds/{it['id']}.mp3", say=SAY.get(it["id"], it["id"]))
                    for w, g in it["words"]: words.add(w)
            if n["kind"] == "words": words.update(n["words"])
        out_levels[k] = dict(name=spec["name"], color=spec["color"], cover=spec["cover"], blurb=spec["blurb"], nodes=nodes)
    W = {w: dict(label=label(w), img=f"assets/words/{slug(w)}.jpg", audio=f"audio/words/{slug(w)}.mp3") for w in sorted(words)}
    head = open(os.path.join(ROOT, "tools", "data_head.js"), encoding="utf-8").read()
    with open(os.path.join(ROOT, "data.js"), "w", encoding="utf-8") as f:
        f.write(head)
        f.write("\n// >>> GENERATED CONTENT (stages, sounds and words). Change it through tools/build_data.py or ask for a rebuild.\n")
        f.write("const SOUNDS = " + json.dumps(sounds, ensure_ascii=False, indent=1) + ";\n\n")
        f.write("const WORDS = " + json.dumps(W, ensure_ascii=False, indent=0) + ";\n\n")
        f.write("const LEVELS = " + json.dumps(out_levels, ensure_ascii=False, indent=None, separators=(",", ":")).replace("},{", "},\n{") + ";\n")
    # list of files
    have_img = set(os.listdir(os.path.join(ROOT, "assets", "words")))
    need_img = [w for w in sorted(words) if f"{slug(w)}.jpg" not in have_img]
    with open(os.path.join(ROOT, "FILES-NEEDED.txt"), "w", encoding="utf-8") as f:
        f.write(f"CRYSTAL PLAY - FILES YOU NEED TO ADD\n(Open your-site/#check to see what is still missing.)\n\n")
        f.write(f"1) PICTURES  -> put in assets/words/   (jpg, about 350 px, name in small letters)\n   Already there: {len(words) - len(need_img)}   Still needed: {len(need_img)}\n")
        for w in need_img: f.write(f"   assets/words/{slug(w)}.jpg      ({label(w)})\n")
        f.write(f"\n2) LETTER SOUNDS  -> put in audio/sounds/   ({len(sounds)} files)\n")
        for i, s in sounds.items(): f.write(f"   audio/sounds/{i}.mp3\n")
        f.write(f"\n3) WORD RECORDINGS  -> put in audio/words/   ({len(words)} files)\n")
        for w in sorted(words): f.write(f"   audio/words/{slug(w)}.mp3      ({label(w)})\n")
    print("levels:", {k: len(v["nodes"]) for k, v in out_levels.items()}, "words:", len(words), "sounds:", len(sounds), "pictures missing:", len(need_img))

main()
