
const GAME = {
  rounds: 10,             // questions in one stage
  reviewRounds: 12,       // questions in a Review
  gemsPerCorrect: 1,      // gems for an answer that is right on the first try
  unlock: "order"         // "order" = the next stage opens after finishing the one before.  "free" = everything is open.
};

const PRAISE   = ["Great job!", "Awesome!", "You got it!", "Super!", "Fantastic!", "Well done!", "Brilliant!"];
const TRYAGAIN = ["Oops, try again!", "Almost! Try again", "Have another go!", "You can do it!"];
const MASCOT   = { hello: "Let's play!", good: ["Yes!", "Wow!", "Yay!"], bad: ["Hmm...", "Try again!", "Almost!"], win: "You did it!" };

const SOUNDS = {
 "a": {
  "file": "audio/sounds/a.mp3",
  "say": "ah"
 },
 "b": {
  "file": "audio/sounds/b.mp3",
  "say": "buh"
 },
 "c": {
  "file": "audio/sounds/c.mp3",
  "say": "kuh"
 },
 "d": {
  "file": "audio/sounds/d.mp3",
  "say": "duh"
 },
 "e": {
  "file": "audio/sounds/e.mp3",
  "say": "eh"
 },
 "f": {
  "file": "audio/sounds/f.mp3",
  "say": "fff"
 },
 "g": {
  "file": "audio/sounds/g.mp3",
  "say": "guh"
 },
 "h": {
  "file": "audio/sounds/h.mp3",
  "say": "huh"
 },
 "i": {
  "file": "audio/sounds/i.mp3",
  "say": "ih"
 },
 "j": {
  "file": "audio/sounds/j.mp3",
  "say": "juh"
 },
 "k": {
  "file": "audio/sounds/k.mp3",
  "say": "kuh"
 },
 "l": {
  "file": "audio/sounds/l.mp3",
  "say": "lll"
 },
 "m": {
  "file": "audio/sounds/m.mp3",
  "say": "mmm"
 },
 "n": {
  "file": "audio/sounds/n.mp3",
  "say": "nnn"
 },
 "o": {
  "file": "audio/sounds/o.mp3",
  "say": "oh"
 },
 "p": {
  "file": "audio/sounds/p.mp3",
  "say": "puh"
 },
 "q": {
  "file": "audio/sounds/q.mp3",
  "say": "kwuh"
 },
 "r": {
  "file": "audio/sounds/r.mp3",
  "say": "rrr"
 },
 "s": {
  "file": "audio/sounds/s.mp3",
  "say": "sss"
 },
 "t": {
  "file": "audio/sounds/t.mp3",
  "say": "tuh"
 },
 "u": {
  "file": "audio/sounds/u.mp3",
  "say": "uh"
 },
 "v": {
  "file": "audio/sounds/v.mp3",
  "say": "vvv"
 },
 "w": {
  "file": "audio/sounds/w.mp3",
  "say": "wuh"
 },
 "x": {
  "file": "audio/sounds/x.mp3",
  "say": "ks"
 },
 "y": {
  "file": "audio/sounds/y.mp3",
  "say": "yuh"
 },
 "z": {
  "file": "audio/sounds/z.mp3",
  "say": "zzz"
 },
 "ck": {
  "file": "audio/sounds/ck.mp3",
  "say": "kuh"
 },
 "ai": {
  "file": "audio/sounds/ai.mp3",
  "say": "ay"
 },
 "oa": {
  "file": "audio/sounds/oa.mp3",
  "say": "oh"
 },
 "ie": {
  "file": "audio/sounds/ie.mp3",
  "say": "eye"
 },
 "ee": {
  "file": "audio/sounds/ee.mp3",
  "say": "ee"
 },
 "or": {
  "file": "audio/sounds/or.mp3",
  "say": "or"
 },
 "ng": {
  "file": "audio/sounds/ng.mp3",
  "say": "ing"
 },
 "oo": {
  "file": "audio/sounds/oo.mp3",
  "say": "oo"
 },
 "ch": {
  "file": "audio/sounds/ch.mp3",
  "say": "chuh"
 },
 "sh": {
  "file": "audio/sounds/sh.mp3",
  "say": "shh"
 },
 "th": {
  "file": "audio/sounds/th.mp3",
  "say": "thuh"
 },
 "qu": {
  "file": "audio/sounds/qu.mp3",
  "say": "kwuh"
 },
 "ou": {
  "file": "audio/sounds/ou.mp3",
  "say": "ow"
 },
 "oi": {
  "file": "audio/sounds/oi.mp3",
  "say": "oy"
 },
 "ue": {
  "file": "audio/sounds/ue.mp3",
  "say": "oo"
 },
 "er": {
  "file": "audio/sounds/er.mp3",
  "say": "er"
 },
 "ar": {
  "file": "audio/sounds/ar.mp3",
  "say": "ar"
 }
};

const WORDS = {
"afternoon": {
"label": "afternoon",
"img": "assets/words/afternoon.jpg",
"audio": "audio/words/afternoon.mp3"
},
"ant": {
"label": "ant",
"img": "assets/words/ant.jpg",
"audio": "audio/words/ant.mp3"
},
"apple": {
"label": "apple",
"img": "assets/words/apple.jpg",
"audio": "audio/words/apple.mp3"
},
"arm": {
"label": "arm",
"img": "assets/words/arm.jpg",
"audio": "audio/words/arm.mp3"
},
"armchair": {
"label": "armchair",
"img": "assets/words/armchair.jpg",
"audio": "audio/words/armchair.mp3"
},
"baby": {
"label": "baby",
"img": "assets/words/baby.jpg",
"audio": "audio/words/baby.mp3"
},
"bag": {
"label": "bag",
"img": "assets/words/bag.jpg",
"audio": "audio/words/bag.mp3"
},
"ball": {
"label": "ball",
"img": "assets/words/ball.jpg",
"audio": "audio/words/ball.mp3"
},
"balloon": {
"label": "balloon",
"img": "assets/words/balloon.jpg",
"audio": "audio/words/balloon.mp3"
},
"banana": {
"label": "banana",
"img": "assets/words/banana.jpg",
"audio": "audio/words/banana.mp3"
},
"basketball": {
"label": "basketball",
"img": "assets/words/basketball.jpg",
"audio": "audio/words/basketball.mp3"
},
"bathroom": {
"label": "bathroom",
"img": "assets/words/bathroom.jpg",
"audio": "audio/words/bathroom.mp3"
},
"bathtub": {
"label": "bathtub",
"img": "assets/words/bathtub.jpg",
"audio": "audio/words/bathtub.mp3"
},
"bear": {
"label": "bear",
"img": "assets/words/bear.jpg",
"audio": "audio/words/bear.mp3"
},
"bed": {
"label": "bed",
"img": "assets/words/bed.jpg",
"audio": "audio/words/bed.mp3"
},
"bedroom": {
"label": "bedroom",
"img": "assets/words/bedroom.jpg",
"audio": "audio/words/bedroom.mp3"
},
"bee": {
"label": "bee",
"img": "assets/words/bee.jpg",
"audio": "audio/words/bee.mp3"
},
"bicycle": {
"label": "bicycle",
"img": "assets/words/bicycle.jpg",
"audio": "audio/words/bicycle.mp3"
},
"bird": {
"label": "bird",
"img": "assets/words/bird.jpg",
"audio": "audio/words/bird.mp3"
},
"blue": {
"label": "blue",
"img": "assets/words/blue.jpg",
"audio": "audio/words/blue.mp3"
},
"board": {
"label": "board",
"img": "assets/words/board.jpg",
"audio": "audio/words/board.mp3"
},
"boat": {
"label": "boat",
"img": "assets/words/boat.jpg",
"audio": "audio/words/boat.mp3"
},
"boil": {
"label": "boil",
"img": "assets/words/boil.jpg",
"audio": "audio/words/boil.mp3"
},
"book": {
"label": "book",
"img": "assets/words/book.jpg",
"audio": "audio/words/book.mp3"
},
"box": {
"label": "box",
"img": "assets/words/box.jpg",
"audio": "audio/words/box.mp3"
},
"bread": {
"label": "bread",
"img": "assets/words/bread.jpg",
"audio": "audio/words/bread.mp3"
},
"broom": {
"label": "broom",
"img": "assets/words/broom.jpg",
"audio": "audio/words/broom.mp3"
},
"brother": {
"label": "brother",
"img": "assets/words/brother.jpg",
"audio": "audio/words/brother.mp3"
},
"burger": {
"label": "burger",
"img": "assets/words/burger.jpg",
"audio": "audio/words/burger.mp3"
},
"bus": {
"label": "bus",
"img": "assets/words/bus.jpg",
"audio": "audio/words/bus.mp3"
},
"camera": {
"label": "camera",
"img": "assets/words/camera.jpg",
"audio": "audio/words/camera.mp3"
},
"cap": {
"label": "cap",
"img": "assets/words/cap.jpg",
"audio": "audio/words/cap.mp3"
},
"car": {
"label": "car",
"img": "assets/words/car.jpg",
"audio": "audio/words/car.mp3"
},
"carrot": {
"label": "carrot",
"img": "assets/words/carrot.jpg",
"audio": "audio/words/carrot.mp3"
},
"cat": {
"label": "cat",
"img": "assets/words/cat.jpg",
"audio": "audio/words/cat.mp3"
},
"chair": {
"label": "chair",
"img": "assets/words/chair.jpg",
"audio": "audio/words/chair.mp3"
},
"chicken": {
"label": "chicken",
"img": "assets/words/chicken.jpg",
"audio": "audio/words/chicken.mp3"
},
"child": {
"label": "child",
"img": "assets/words/child.jpg",
"audio": "audio/words/child.mp3"
},
"chocolate": {
"label": "chocolate",
"img": "assets/words/chocolate.jpg",
"audio": "audio/words/chocolate.mp3"
},
"clock": {
"label": "clock",
"img": "assets/words/clock.jpg",
"audio": "audio/words/clock.mp3"
},
"cloud": {
"label": "cloud",
"img": "assets/words/cloud.jpg",
"audio": "audio/words/cloud.mp3"
},
"coat": {
"label": "coat",
"img": "assets/words/coat.jpg",
"audio": "audio/words/coat.mp3"
},
"corn": {
"label": "corn",
"img": "assets/words/corn.jpg",
"audio": "audio/words/corn.mp3"
},
"cow": {
"label": "cow",
"img": "assets/words/cow.jpg",
"audio": "audio/words/cow.mp3"
},
"crab": {
"label": "crab",
"img": "assets/words/crab.jpg",
"audio": "audio/words/crab.mp3"
},
"crayons": {
"label": "crayons",
"img": "assets/words/crayons.jpg",
"audio": "audio/words/crayons.mp3"
},
"crocodile": {
"label": "crocodile",
"img": "assets/words/crocodile.jpg",
"audio": "audio/words/crocodile.mp3"
},
"dog": {
"label": "dog",
"img": "assets/words/dog.jpg",
"audio": "audio/words/dog.mp3"
},
"doll": {
"label": "doll",
"img": "assets/words/doll.jpg",
"audio": "audio/words/doll.mp3"
},
"donkey": {
"label": "donkey",
"img": "assets/words/donkey.jpg",
"audio": "audio/words/donkey.mp3"
},
"door": {
"label": "door",
"img": "assets/words/door.jpg",
"audio": "audio/words/door.mp3"
},
"draw": {
"label": "draw",
"img": "assets/words/draw.jpg",
"audio": "audio/words/draw.mp3"
},
"dress": {
"label": "dress",
"img": "assets/words/dress.jpg",
"audio": "audio/words/dress.mp3"
},
"drum": {
"label": "drum",
"img": "assets/words/drum.jpg",
"audio": "audio/words/drum.mp3"
},
"duck": {
"label": "duck",
"img": "assets/words/duck.jpg",
"audio": "audio/words/duck.mp3"
},
"ear": {
"label": "ear",
"img": "assets/words/ear.jpg",
"audio": "audio/words/ear.mp3"
},
"egg": {
"label": "egg",
"img": "assets/words/egg.jpg",
"audio": "audio/words/egg.mp3"
},
"elephant": {
"label": "elephant",
"img": "assets/words/elephant.jpg",
"audio": "audio/words/elephant.mp3"
},
"eraser": {
"label": "eraser",
"img": "assets/words/eraser.jpg",
"audio": "audio/words/eraser.mp3"
},
"eye": {
"label": "eye",
"img": "assets/words/eye.jpg",
"audio": "audio/words/eye.mp3"
},
"face": {
"label": "face",
"img": "assets/words/face.jpg",
"audio": "audio/words/face.mp3"
},
"fan": {
"label": "fan",
"img": "assets/words/fan.jpg",
"audio": "audio/words/fan.mp3"
},
"far": {
"label": "far",
"img": "assets/words/far.jpg",
"audio": "audio/words/far.mp3"
},
"father": {
"label": "father",
"img": "assets/words/father.jpg",
"audio": "audio/words/father.mp3"
},
"feather": {
"label": "feather",
"img": "assets/words/feather.jpg",
"audio": "audio/words/feather.mp3"
},
"feet": {
"label": "feet",
"img": "assets/words/feet.jpg",
"audio": "audio/words/feet.mp3"
},
"fish": {
"label": "fish",
"img": "assets/words/fish.jpg",
"audio": "audio/words/fish.mp3"
},
"fix": {
"label": "fix",
"img": "assets/words/fix.jpg",
"audio": "audio/words/fix.mp3"
},
"flower": {
"label": "flower",
"img": "assets/words/flower.jpg",
"audio": "audio/words/flower.mp3"
},
"football": {
"label": "football",
"img": "assets/words/football.jpg",
"audio": "audio/words/football.mp3"
},
"fork": {
"label": "fork",
"img": "assets/words/fork.jpg",
"audio": "audio/words/fork.mp3"
},
"fox": {
"label": "fox",
"img": "assets/words/fox.jpg",
"audio": "audio/words/fox.mp3"
},
"fries": {
"label": "fries",
"img": "assets/words/fries.jpg",
"audio": "audio/words/fries.mp3"
},
"frog": {
"label": "frog",
"img": "assets/words/frog.jpg",
"audio": "audio/words/frog.mp3"
},
"garden": {
"label": "garden",
"img": "assets/words/garden.jpg",
"audio": "audio/words/garden.mp3"
},
"giraffe": {
"label": "giraffe",
"img": "assets/words/giraffe.jpg",
"audio": "audio/words/giraffe.mp3"
},
"girl": {
"label": "girl",
"img": "assets/words/girl.jpg",
"audio": "audio/words/girl.mp3"
},
"glass": {
"label": "glass",
"img": "assets/words/glass.jpg",
"audio": "audio/words/glass.mp3"
},
"glasses": {
"label": "glasses",
"img": "assets/words/glasses.jpg",
"audio": "audio/words/glasses.mp3"
},
"glue": {
"label": "glue",
"img": "assets/words/glue.jpg",
"audio": "audio/words/glue.mp3"
},
"goat": {
"label": "goat",
"img": "assets/words/goat.jpg",
"audio": "audio/words/goat.mp3"
},
"grandma": {
"label": "grandma",
"img": "assets/words/grandma.jpg",
"audio": "audio/words/grandma.mp3"
},
"grandpa": {
"label": "grandpa",
"img": "assets/words/grandpa.jpg",
"audio": "audio/words/grandpa.mp3"
},
"gum": {
"label": "gum",
"img": "assets/words/gum.jpg",
"audio": "audio/words/gum.mp3"
},
"hand": {
"label": "hand",
"img": "assets/words/hand.jpg",
"audio": "audio/words/hand.mp3"
},
"handbag": {
"label": "handbag",
"img": "assets/words/handbag.jpg",
"audio": "audio/words/handbag.mp3"
},
"hat": {
"label": "hat",
"img": "assets/words/hat.jpg",
"audio": "audio/words/hat.mp3"
},
"hen": {
"label": "hen",
"img": "assets/words/hen.jpg",
"audio": "audio/words/hen.mp3"
},
"her": {
"label": "her",
"img": "assets/words/her.jpg",
"audio": "audio/words/her.mp3"
},
"hippo": {
"label": "hippo",
"img": "assets/words/hippo.jpg",
"audio": "audio/words/hippo.mp3"
},
"horse": {
"label": "horse",
"img": "assets/words/horse.jpg",
"audio": "audio/words/horse.mp3"
},
"house": {
"label": "house",
"img": "assets/words/house.jpg",
"audio": "audio/words/house.mp3"
},
"ice": {
"label": "ice",
"img": "assets/words/ice.jpg",
"audio": "audio/words/ice.mp3"
},
"ice-cream": {
"label": "ice cream",
"img": "assets/words/ice-cream.jpg",
"audio": "audio/words/ice-cream.mp3"
},
"in": {
"label": "in",
"img": "assets/words/in.jpg",
"audio": "audio/words/in.mp3"
},
"ink": {
"label": "ink",
"img": "assets/words/ink.jpg",
"audio": "audio/words/ink.mp3"
},
"jacket": {
"label": "jacket",
"img": "assets/words/jacket.jpg",
"audio": "audio/words/jacket.mp3"
},
"jam": {
"label": "jam",
"img": "assets/words/jam.jpg",
"audio": "audio/words/jam.mp3"
},
"jar": {
"label": "jar",
"img": "assets/words/jar.jpg",
"audio": "audio/words/jar.mp3"
},
"jeans": {
"label": "jeans",
"img": "assets/words/jeans.jpg",
"audio": "audio/words/jeans.mp3"
},
"jump": {
"label": "jump",
"img": "assets/words/jump.jpg",
"audio": "audio/words/jump.mp3"
},
"key": {
"label": "key",
"img": "assets/words/key.jpg",
"audio": "audio/words/key.mp3"
},
"kite": {
"label": "kite",
"img": "assets/words/kite.jpg",
"audio": "audio/words/kite.mp3"
},
"lamp": {
"label": "lamp",
"img": "assets/words/lamp.jpg",
"audio": "audio/words/lamp.mp3"
},
"leg": {
"label": "leg",
"img": "assets/words/leg.jpg",
"audio": "audio/words/leg.mp3"
},
"lemon-juice": {
"label": "lemon juice",
"img": "assets/words/lemon-juice.jpg",
"audio": "audio/words/lemon-juice.mp3"
},
"lion": {
"label": "lion",
"img": "assets/words/lion.jpg",
"audio": "audio/words/lion.mp3"
},
"lizard": {
"label": "lizard",
"img": "assets/words/lizard.jpg",
"audio": "audio/words/lizard.mp3"
},
"mat": {
"label": "mat",
"img": "assets/words/mat.jpg",
"audio": "audio/words/mat.mp3"
},
"mirror": {
"label": "mirror",
"img": "assets/words/mirror.jpg",
"audio": "audio/words/mirror.mp3"
},
"monkey": {
"label": "monkey",
"img": "assets/words/monkey.jpg",
"audio": "audio/words/monkey.mp3"
},
"moon": {
"label": "moon",
"img": "assets/words/moon.jpg",
"audio": "audio/words/moon.mp3"
},
"morning": {
"label": "morning",
"img": "assets/words/morning.jpg",
"audio": "audio/words/morning.mp3"
},
"mother": {
"label": "mother",
"img": "assets/words/mother.jpg",
"audio": "audio/words/mother.mp3"
},
"motorbike": {
"label": "motorbike",
"img": "assets/words/motorbike.jpg",
"audio": "audio/words/motorbike.mp3"
},
"mouse": {
"label": "mouse",
"img": "assets/words/mouse.jpg",
"audio": "audio/words/mouse.mp3"
},
"mouth": {
"label": "mouth",
"img": "assets/words/mouth.jpg",
"audio": "audio/words/mouth.mp3"
},
"mug": {
"label": "mug",
"img": "assets/words/mug.jpg",
"audio": "audio/words/mug.mp3"
},
"nail": {
"label": "nail",
"img": "assets/words/nail.jpg",
"audio": "audio/words/nail.mp3"
},
"neck": {
"label": "neck",
"img": "assets/words/neck.jpg",
"audio": "audio/words/neck.mp3"
},
"nest": {
"label": "nest",
"img": "assets/words/nest.jpg",
"audio": "audio/words/nest.mp3"
},
"net": {
"label": "net",
"img": "assets/words/net.jpg",
"audio": "audio/words/net.mp3"
},
"night": {
"label": "night",
"img": "assets/words/night.jpg",
"audio": "audio/words/night.mp3"
},
"nose": {
"label": "nose",
"img": "assets/words/nose.jpg",
"audio": "audio/words/nose.mp3"
},
"off": {
"label": "off",
"img": "assets/words/off.jpg",
"audio": "audio/words/off.mp3"
},
"oil": {
"label": "oil",
"img": "assets/words/oil.jpg",
"audio": "audio/words/oil.mp3"
},
"old": {
"label": "old",
"img": "assets/words/old.jpg",
"audio": "audio/words/old.mp3"
},
"on": {
"label": "on",
"img": "assets/words/on.jpg",
"audio": "audio/words/on.mp3"
},
"orange": {
"label": "orange",
"img": "assets/words/orange.jpg",
"audio": "audio/words/orange.mp3"
},
"ox": {
"label": "ox",
"img": "assets/words/ox.jpg",
"audio": "audio/words/ox.mp3"
},
"paint": {
"label": "paint",
"img": "assets/words/paint.jpg",
"audio": "audio/words/paint.mp3"
},
"pan": {
"label": "pan",
"img": "assets/words/pan.jpg",
"audio": "audio/words/pan.mp3"
},
"panda": {
"label": "panda",
"img": "assets/words/panda.jpg",
"audio": "audio/words/panda.mp3"
},
"paper": {
"label": "paper",
"img": "assets/words/paper.jpg",
"audio": "audio/words/paper.mp3"
},
"pen": {
"label": "pen",
"img": "assets/words/pen.jpg",
"audio": "audio/words/pen.mp3"
},
"pencil": {
"label": "pencil",
"img": "assets/words/pencil.jpg",
"audio": "audio/words/pencil.mp3"
},
"photo": {
"label": "photo",
"img": "assets/words/photo.jpg",
"audio": "audio/words/photo.mp3"
},
"piano": {
"label": "piano",
"img": "assets/words/piano.jpg",
"audio": "audio/words/piano.mp3"
},
"pie": {
"label": "pie",
"img": "assets/words/pie.jpg",
"audio": "audio/words/pie.mp3"
},
"pig": {
"label": "pig",
"img": "assets/words/pig.jpg",
"audio": "audio/words/pig.mp3"
},
"plane": {
"label": "plane",
"img": "assets/words/plane.jpg",
"audio": "audio/words/plane.mp3"
},
"puzzle": {
"label": "puzzle",
"img": "assets/words/puzzle.jpg",
"audio": "audio/words/puzzle.mp3"
},
"queen": {
"label": "queen",
"img": "assets/words/queen.jpg",
"audio": "audio/words/queen.mp3"
},
"question": {
"label": "question",
"img": "assets/words/question.jpg",
"audio": "audio/words/question.mp3"
},
"quiet": {
"label": "quiet",
"img": "assets/words/quiet.jpg",
"audio": "audio/words/quiet.mp3"
},
"rabbit": {
"label": "rabbit",
"img": "assets/words/rabbit.jpg",
"audio": "audio/words/rabbit.mp3"
},
"racket": {
"label": "racket",
"img": "assets/words/racket.jpg",
"audio": "audio/words/racket.mp3"
},
"radio": {
"label": "radio",
"img": "assets/words/radio.jpg",
"audio": "audio/words/radio.mp3"
},
"rain": {
"label": "rain",
"img": "assets/words/rain.jpg",
"audio": "audio/words/rain.mp3"
},
"rat": {
"label": "rat",
"img": "assets/words/rat.jpg",
"audio": "audio/words/rat.mp3"
},
"read": {
"label": "read",
"img": "assets/words/read.jpg",
"audio": "audio/words/read.mp3"
},
"red": {
"label": "red",
"img": "assets/words/red.jpg",
"audio": "audio/words/red.mp3"
},
"right": {
"label": "right",
"img": "assets/words/right.jpg",
"audio": "audio/words/right.mp3"
},
"ring": {
"label": "ring",
"img": "assets/words/ring.jpg",
"audio": "audio/words/ring.mp3"
},
"robot": {
"label": "robot",
"img": "assets/words/robot.jpg",
"audio": "audio/words/robot.mp3"
},
"ruler": {
"label": "ruler",
"img": "assets/words/ruler.jpg",
"audio": "audio/words/ruler.mp3"
},
"run": {
"label": "run",
"img": "assets/words/run.jpg",
"audio": "audio/words/run.mp3"
},
"sad": {
"label": "sad",
"img": "assets/words/sad.jpg",
"audio": "audio/words/sad.mp3"
},
"school": {
"label": "school",
"img": "assets/words/school.jpg",
"audio": "audio/words/school.mp3"
},
"see": {
"label": "see",
"img": "assets/words/see.jpg",
"audio": "audio/words/see.mp3"
},
"shark": {
"label": "shark",
"img": "assets/words/shark.jpg",
"audio": "audio/words/shark.mp3"
},
"sheep": {
"label": "sheep",
"img": "assets/words/sheep.jpg",
"audio": "audio/words/sheep.mp3"
},
"ship": {
"label": "ship",
"img": "assets/words/ship.jpg",
"audio": "audio/words/ship.mp3"
},
"shirt": {
"label": "shirt",
"img": "assets/words/shirt.jpg",
"audio": "audio/words/shirt.mp3"
},
"shoes": {
"label": "shoes",
"img": "assets/words/shoes.jpg",
"audio": "audio/words/shoes.mp3"
},
"short": {
"label": "short",
"img": "assets/words/short.jpg",
"audio": "audio/words/short.mp3"
},
"shorts": {
"label": "shorts",
"img": "assets/words/shorts.jpg",
"audio": "audio/words/shorts.mp3"
},
"sing": {
"label": "sing",
"img": "assets/words/sing.jpg",
"audio": "audio/words/sing.mp3"
},
"sister": {
"label": "sister",
"img": "assets/words/sister.jpg",
"audio": "audio/words/sister.mp3"
},
"skirt": {
"label": "skirt",
"img": "assets/words/skirt.jpg",
"audio": "audio/words/skirt.mp3"
},
"sky": {
"label": "sky",
"img": "assets/words/sky.jpg",
"audio": "audio/words/sky.mp3"
},
"snake": {
"label": "snake",
"img": "assets/words/snake.jpg",
"audio": "audio/words/snake.mp3"
},
"socks": {
"label": "socks",
"img": "assets/words/socks.jpg",
"audio": "audio/words/socks.mp3"
},
"sofa": {
"label": "sofa",
"img": "assets/words/sofa.jpg",
"audio": "audio/words/sofa.mp3"
},
"soil": {
"label": "soil",
"img": "assets/words/soil.jpg",
"audio": "audio/words/soil.mp3"
},
"son": {
"label": "son",
"img": "assets/words/son.jpg",
"audio": "audio/words/son.mp3"
},
"spoon": {
"label": "spoon",
"img": "assets/words/spoon.jpg",
"audio": "audio/words/spoon.mp3"
},
"stairs": {
"label": "stairs",
"img": "assets/words/stairs.jpg",
"audio": "audio/words/stairs.mp3"
},
"star": {
"label": "star",
"img": "assets/words/star.jpg",
"audio": "audio/words/star.mp3"
},
"sun": {
"label": "sun",
"img": "assets/words/sun.jpg",
"audio": "audio/words/sun.mp3"
},
"sweet": {
"label": "sweet",
"img": "assets/words/sweet.jpg",
"audio": "audio/words/sweet.mp3"
},
"swing": {
"label": "swing",
"img": "assets/words/swing.jpg",
"audio": "audio/words/swing.mp3"
},
"t-shirt": {
"label": "T-shirt",
"img": "assets/words/t-shirt.jpg",
"audio": "audio/words/t-shirt.mp3"
},
"table": {
"label": "table",
"img": "assets/words/table.jpg",
"audio": "audio/words/table.mp3"
},
"tablet": {
"label": "tablet",
"img": "assets/words/tablet.jpg",
"audio": "audio/words/tablet.mp3"
},
"teacher": {
"label": "teacher",
"img": "assets/words/teacher.jpg",
"audio": "audio/words/teacher.mp3"
},
"teddy": {
"label": "teddy",
"img": "assets/words/teddy.jpg",
"audio": "audio/words/teddy.mp3"
},
"teeth": {
"label": "teeth",
"img": "assets/words/teeth.jpg",
"audio": "audio/words/teeth.mp3"
},
"ten": {
"label": "ten",
"img": "assets/words/ten.jpg",
"audio": "audio/words/ten.mp3"
},
"thin": {
"label": "thin",
"img": "assets/words/thin.jpg",
"audio": "audio/words/thin.mp3"
},
"three": {
"label": "three",
"img": "assets/words/three.jpg",
"audio": "audio/words/three.mp3"
},
"throw": {
"label": "throw",
"img": "assets/words/throw.jpg",
"audio": "audio/words/throw.mp3"
},
"tie": {
"label": "tie",
"img": "assets/words/tie.jpg",
"audio": "audio/words/tie.mp3"
},
"tiger": {
"label": "tiger",
"img": "assets/words/tiger.jpg",
"audio": "audio/words/tiger.mp3"
},
"toy": {
"label": "toy",
"img": "assets/words/toy.jpg",
"audio": "audio/words/toy.mp3"
},
"train": {
"label": "train",
"img": "assets/words/train.jpg",
"audio": "audio/words/train.mp3"
},
"tree": {
"label": "tree",
"img": "assets/words/tree.jpg",
"audio": "audio/words/tree.mp3"
},
"trousers": {
"label": "trousers",
"img": "assets/words/trousers.jpg",
"audio": "audio/words/trousers.mp3"
},
"truck": {
"label": "truck",
"img": "assets/words/truck.jpg",
"audio": "audio/words/truck.mp3"
},
"true": {
"label": "true",
"img": "assets/words/true.jpg",
"audio": "audio/words/true.mp3"
},
"umbrella": {
"label": "umbrella",
"img": "assets/words/umbrella.jpg",
"audio": "audio/words/umbrella.mp3"
},
"under": {
"label": "under",
"img": "assets/words/under.jpg",
"audio": "audio/words/under.mp3"
},
"unicorn": {
"label": "unicorn",
"img": "assets/words/unicorn.jpg",
"audio": "audio/words/unicorn.mp3"
},
"up": {
"label": "up",
"img": "assets/words/up.jpg",
"audio": "audio/words/up.mp3"
},
"van": {
"label": "van",
"img": "assets/words/van.jpg",
"audio": "audio/words/van.mp3"
},
"vase": {
"label": "vase",
"img": "assets/words/vase.jpg",
"audio": "audio/words/vase.mp3"
},
"vet": {
"label": "vet",
"img": "assets/words/vet.jpg",
"audio": "audio/words/vet.mp3"
},
"wall": {
"label": "wall",
"img": "assets/words/wall.jpg",
"audio": "audio/words/wall.mp3"
},
"wash": {
"label": "wash",
"img": "assets/words/wash.jpg",
"audio": "audio/words/wash.mp3"
},
"watch": {
"label": "watch",
"img": "assets/words/watch.jpg",
"audio": "audio/words/watch.mp3"
},
"whale": {
"label": "whale",
"img": "assets/words/whale.jpg",
"audio": "audio/words/whale.mp3"
},
"window": {
"label": "window",
"img": "assets/words/window.jpg",
"audio": "audio/words/window.mp3"
},
"wing": {
"label": "wing",
"img": "assets/words/wing.jpg",
"audio": "audio/words/wing.mp3"
},
"winter": {
"label": "winter",
"img": "assets/words/winter.jpg",
"audio": "audio/words/winter.mp3"
},
"wood": {
"label": "wood",
"img": "assets/words/wood.jpg",
"audio": "audio/words/wood.mp3"
},
"wrong": {
"label": "wrong",
"img": "assets/words/wrong.jpg",
"audio": "audio/words/wrong.mp3"
},
"yellow": {
"label": "yellow",
"img": "assets/words/yellow.jpg",
"audio": "audio/words/yellow.mp3"
},
"yogurt": {
"label": "yogurt",
"img": "assets/words/yogurt.jpg",
"audio": "audio/words/yogurt.mp3"
},
"young": {
"label": "young",
"img": "assets/words/young.jpg",
"audio": "audio/words/young.mp3"
},
"yoyo": {
"label": "yoyo",
"img": "assets/words/yoyo.jpg",
"audio": "audio/words/yoyo.mp3"
},
"zebra": {
"label": "zebra",
"img": "assets/words/zebra.jpg",
"audio": "audio/words/zebra.mp3"
},
"zip": {
"label": "zip",
"img": "assets/words/zip.jpg",
"audio": "audio/words/zip.mp3"
},
"zoo": {
"label": "zoo",
"img": "assets/words/zoo.jpg",
"audio": "audio/words/zoo.mp3"
}
};

const LEVELS = {"A":{"name":"Level A","color":"#4ade80","cover":"assets/frontA.jpg","blurb":"The letters from A to Z","nodes":[{"kind":"sounds","title":"Stage 1","sub":"Aa Bb Cc Dd Ee","section":"Letters","items":[{"id":"a","label":"Aa","gs":["a"],"pos":"start","words":[["apple","a"]]},
{"id":"b","label":"Bb","gs":["b"],"pos":"start","words":[["book","b"]]},
{"id":"c","label":"Cc","gs":["c"],"pos":"start","words":[["cat","c"]]},
{"id":"d","label":"Dd","gs":["d"],"pos":"start","words":[["dog","d"]]},
{"id":"e","label":"Ee","gs":["e"],"pos":"start","words":[["elephant","e"]]}]},
{"kind":"sounds","title":"Stage 2","sub":"Ff Gg Hh Ii Jj","section":"Letters","items":[{"id":"f","label":"Ff","gs":["f"],"pos":"start","words":[["fish","f"]]},
{"id":"g","label":"Gg","gs":["g"],"pos":"start","words":[["girl","g"]]},
{"id":"h","label":"Hh","gs":["h"],"pos":"start","words":[["horse","h"]]},
{"id":"i","label":"Ii","gs":["i"],"pos":"start","words":[["ice-cream","i"]]},
{"id":"j","label":"Jj","gs":["j"],"pos":"start","words":[["jar","j"]]}]},
{"kind":"sounds","title":"Stage 3","sub":"Kk Ll Mm Nn Oo","section":"Letters","items":[{"id":"k","label":"Kk","gs":["k"],"pos":"start","words":[["key","k"],["kite","k"]]},
{"id":"l","label":"Ll","gs":["l"],"pos":"start","words":[["lion","l"]]},
{"id":"m","label":"Mm","gs":["m"],"pos":"start","words":[["mouse","m"]]},
{"id":"n","label":"Nn","gs":["n"],"pos":"start","words":[["nest","n"],["net","n"],["neck","n"]]},
{"id":"o","label":"Oo","gs":["o"],"pos":"start","words":[["orange","o"],["on","o"],["old","o"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Letters","covers":[0,1,2]},
{"kind":"sounds","title":"Stage 4","sub":"Pp Qq Rr Ss Tt","section":"Letters","items":[{"id":"p","label":"Pp","gs":["p"],"pos":"start","words":[["pig","p"],["pan","p"],["panda","p"],["pencil","p"]]},
{"id":"q","label":"Qq","gs":["q"],"pos":"start","words":[["queen","q"],["quiet","q"]]},
{"id":"r","label":"Rr","gs":["r"],"pos":"start","words":[["rat","r"],["rabbit","r"],["run","r"]]},
{"id":"s","label":"Ss","gs":["s"],"pos":"start","words":[["star","s"],["sun","s"],["sad","s"]]},
{"id":"t","label":"Tt","gs":["t"],"pos":"start","words":[["teacher","t"],["toy","t"],["ten","t"]]}]},
{"kind":"sounds","title":"Stage 5","sub":"Uu Vv Ww Xx Yy Zz","section":"Letters","items":[{"id":"u","label":"Uu","gs":["u"],"pos":"start","words":[["unicorn","u"],["up","u"],["under","u"],["umbrella","u"]]},
{"id":"v","label":"Vv","gs":["v"],"pos":"start","words":[["van","v"],["vet","v"],["vase","v"]]},
{"id":"w","label":"Ww","gs":["w"],"pos":"start","words":[["whale","w"],["window","w"],["wash","w"],["watch","w"]]},
{"id":"x","label":"Xx","gs":["x"],"pos":"end","words":[["fox","x"],["box","x"],["ox","x"]]},
{"id":"y","label":"Yy","gs":["y"],"pos":"start","words":[["yellow","y"],["young","y"],["yoyo","y"]]},
{"id":"z","label":"Zz","gs":["z"],"pos":"start","words":[["zoo","z"],["zip","z"],["zebra","z"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Letters","covers":[4,5]}]},"B":{"name":"Level B","color":"#60a5fa","cover":"assets/frontB.jpg","blurb":"Sounds and words","nodes":[{"kind":"sounds","title":"Stage 1","sub":"Ss Aa Tt Ii Pp","section":"Sounds","items":[{"id":"s","label":"Ss","gs":["s"],"pos":"start","words":[["sun","s"],["son","s"],["sky","s"]]},
{"id":"a","label":"Aa","gs":["a"],"pos":"start","words":[["apple","a"],["arm","a"],["ant","a"]]},
{"id":"t","label":"Tt","gs":["t"],"pos":"start","words":[["tie","t"],["tree","t"],["teddy","t"]]},
{"id":"i","label":"Ii","gs":["i"],"pos":"start","words":[["ink","i"],["ice","i"],["in","i"]]},
{"id":"p","label":"Pp","gs":["p"],"pos":"start","words":[["pan","p"],["panda","p"],["pen","p"]]}]},
{"kind":"sounds","title":"Stage 2","sub":"Nn Cc / Kk Ee Hh Rr","section":"Sounds","items":[{"id":"n","label":"Nn","gs":["n"],"pos":"start","words":[["nest","n"],["net","n"],["neck","n"]]},
{"id":"ck","label":"Cc / Kk","gs":["c","k"],"pos":"start","words":[["car","c"],["cat","c"],["key","k"],["kite","k"]]},
{"id":"e","label":"Ee","gs":["e"],"pos":"start","words":[["egg","e"],["ear","e"],["elephant","e"]]},
{"id":"h","label":"Hh","gs":["h"],"pos":"start","words":[["hat","h"],["hand","h"],["horse","h"]]},
{"id":"r","label":"Rr","gs":["r"],"pos":"start","words":[["rabbit","r"],["radio","r"],["red","r"]]}]},
{"kind":"sounds","title":"Stage 3","sub":"Mm Dd Gg Oo Ll","section":"Sounds","items":[{"id":"m","label":"Mm","gs":["m"],"pos":"start","words":[["mug","m"],["mouth","m"],["monkey","m"]]},
{"id":"d","label":"Dd","gs":["d"],"pos":"start","words":[["drum","d"],["dog","d"],["door","d"]]},
{"id":"g","label":"Gg","gs":["g"],"pos":"start","words":[["garden","g"],["girl","g"],["glass","g"]]},
{"id":"o","label":"Oo","gs":["o"],"pos":"start","words":[["orange","o"],["on","o"],["off","o"]]},
{"id":"l","label":"Ll","gs":["l"],"pos":"start","words":[["leg","l"],["lion","l"],["lamp","l"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Sounds","covers":[0,1,2]},
{"kind":"sounds","title":"Stage 4","sub":"Uu Ff Bb ai Jj","section":"Sounds","items":[{"id":"u","label":"Uu","gs":["u"],"pos":"any","words":[["umbrella","u"],["up","u"],["gum","u"]]},
{"id":"f","label":"Ff","gs":["f"],"pos":"start","words":[["face","f"],["fork","f"],["fan","f"]]},
{"id":"b","label":"Bb","gs":["b"],"pos":"start","words":[["book","b"],["ball","b"],["bag","b"]]},
{"id":"ai","label":"ai","gs":["ai"],"pos":"any","words":[["nail","ai"],["rain","ai"],["train","ai"]]},
{"id":"j","label":"Jj","gs":["j"],"pos":"start","words":[["jar","j"],["jam","j"],["jump","j"]]}]},
{"kind":"sounds","title":"Stage 5","sub":"oa ie ee or","section":"Sounds","items":[{"id":"oa","label":"oa","gs":["oa"],"pos":"any","words":[["coat","oa"],["goat","oa"],["boat","oa"]]},
{"id":"ie","label":"ie","gs":["ie"],"pos":"any","words":[["tie","ie"],["pie","ie"],["fries","ie"]]},
{"id":"ee","label":"ee","gs":["ee"],"pos":"any","words":[["bee","ee"],["see","ee"],["sweet","ee"]]},
{"id":"or","label":"or","gs":["or"],"pos":"any","words":[["horse","or"],["fork","or"],["corn","or"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Sounds","covers":[4,5]}]},"C":{"name":"Level C","color":"#fbbf24","cover":"assets/frontC.jpg","blurb":"Sounds, words and topics","nodes":[{"kind":"sounds","title":"Stage 1","sub":"Ss Aa Tt Ii Pp","section":"Sounds","items":[{"id":"s","label":"Ss","gs":["s"],"pos":"start","words":[["sun","s"],["son","s"],["sky","s"]]},
{"id":"a","label":"Aa","gs":["a"],"pos":"start","words":[["apple","a"],["arm","a"],["ant","a"]]},
{"id":"t","label":"Tt","gs":["t"],"pos":"start","words":[["tie","t"],["tree","t"],["teddy","t"]]},
{"id":"i","label":"Ii","gs":["i"],"pos":"start","words":[["ink","i"],["ice","i"],["in","i"]]},
{"id":"p","label":"Pp","gs":["p"],"pos":"start","words":[["pan","p"],["panda","p"],["pen","p"]]}]},
{"kind":"sounds","title":"Stage 2","sub":"Nn Cc / Kk Ee Hh Rr","section":"Sounds","items":[{"id":"n","label":"Nn","gs":["n"],"pos":"start","words":[["nest","n"],["net","n"],["neck","n"]]},
{"id":"ck","label":"Cc / Kk","gs":["c","k"],"pos":"start","words":[["car","c"],["cat","c"],["key","k"],["kite","k"]]},
{"id":"e","label":"Ee","gs":["e"],"pos":"start","words":[["egg","e"],["ear","e"],["elephant","e"]]},
{"id":"h","label":"Hh","gs":["h"],"pos":"start","words":[["hat","h"],["hand","h"],["horse","h"]]},
{"id":"r","label":"Rr","gs":["r"],"pos":"start","words":[["rabbit","r"],["radio","r"],["red","r"]]}]},
{"kind":"sounds","title":"Stage 3","sub":"Mm Dd Gg Oo Ll","section":"Sounds","items":[{"id":"m","label":"Mm","gs":["m"],"pos":"start","words":[["mug","m"],["mouth","m"],["monkey","m"]]},
{"id":"d","label":"Dd","gs":["d"],"pos":"start","words":[["drum","d"],["dog","d"],["door","d"]]},
{"id":"g","label":"Gg","gs":["g"],"pos":"start","words":[["garden","g"],["girl","g"],["glass","g"]]},
{"id":"o","label":"Oo","gs":["o"],"pos":"start","words":[["orange","o"],["on","o"],["off","o"]]},
{"id":"l","label":"Ll","gs":["l"],"pos":"start","words":[["leg","l"],["lion","l"],["lamp","l"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Sounds","covers":[0,1,2]},
{"kind":"sounds","title":"Stage 4","sub":"Uu Ff Bb ai Jj","section":"Sounds","items":[{"id":"u","label":"Uu","gs":["u"],"pos":"any","words":[["umbrella","u"],["up","u"],["gum","u"]]},
{"id":"f","label":"Ff","gs":["f"],"pos":"start","words":[["face","f"],["fork","f"],["fan","f"]]},
{"id":"b","label":"Bb","gs":["b"],"pos":"start","words":[["book","b"],["ball","b"],["bag","b"]]},
{"id":"ai","label":"ai","gs":["ai"],"pos":"any","words":[["nail","ai"],["rain","ai"],["train","ai"]]},
{"id":"j","label":"Jj","gs":["j"],"pos":"start","words":[["jar","j"],["jam","j"],["jump","j"]]}]},
{"kind":"sounds","title":"Stage 5","sub":"oa ie ee or Zz","section":"Sounds","items":[{"id":"oa","label":"oa","gs":["oa"],"pos":"any","words":[["coat","oa"],["goat","oa"],["boat","oa"]]},
{"id":"ie","label":"ie","gs":["ie"],"pos":"any","words":[["tie","ie"],["pie","ie"],["fries","ie"]]},
{"id":"ee","label":"ee","gs":["ee"],"pos":"any","words":[["bee","ee"],["see","ee"],["sweet","ee"]]},
{"id":"or","label":"or","gs":["or"],"pos":"any","words":[["horse","or"],["fork","or"],["corn","or"]]},
{"id":"z","label":"Zz","gs":["z"],"pos":"start","words":[["zoo","z"],["zip","z"],["zebra","z"]]}]},
{"kind":"sounds","title":"Stage 6","sub":"Ww ng Vv oo Yy","section":"Sounds","items":[{"id":"w","label":"Ww","gs":["w"],"pos":"start","words":[["window","w"],["wall","w"],["wood","w"]]},
{"id":"ng","label":"ng","gs":["ng"],"pos":"end","words":[["ring","ng"],["wing","ng"],["swing","ng"]]},
{"id":"v","label":"Vv","gs":["v"],"pos":"start","words":[["van","v"],["vet","v"],["vase","v"]]},
{"id":"oo","label":"oo","gs":["oo"],"pos":"any","words":[["moon","oo"],["spoon","oo"],["broom","oo"]]},
{"id":"y","label":"Yy","gs":["y"],"pos":"start","words":[["yoyo","y"],["yogurt","y"],["yellow","y"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Sounds","covers":[4,5,6]},
{"kind":"sounds","title":"Stage 7","sub":"Xx ch sh th qu","section":"Sounds","items":[{"id":"x","label":"Xx","gs":["x"],"pos":"end","words":[["fox","x"],["box","x"],["fix","x"]]},
{"id":"ch","label":"ch","gs":["ch"],"pos":"start","words":[["chair","ch"],["chocolate","ch"],["child","ch"]]},
{"id":"sh","label":"sh","gs":["sh"],"pos":"start","words":[["shark","sh"],["short","sh"],["shirt","sh"]]},
{"id":"th","label":"th","gs":["th"],"pos":"any","words":[["thin","th"],["throw","th"],["three","th"],["mother","th"],["father","th"],["feather","th"]]},
{"id":"qu","label":"qu","gs":["qu"],"pos":"start","words":[["quiet","qu"],["queen","qu"],["question","qu"]]}]},
{"kind":"sounds","title":"Stage 8","sub":"ou oi ue er ar","section":"Sounds","items":[{"id":"ou","label":"ou","gs":["ou"],"pos":"any","words":[["mouth","ou"],["house","ou"],["cloud","ou"]]},
{"id":"oi","label":"oi","gs":["oi"],"pos":"any","words":[["oil","oi"],["soil","oi"],["boil","oi"]]},
{"id":"ue","label":"ue","gs":["ue"],"pos":"end","words":[["blue","ue"],["glue","ue"],["true","ue"]]},
{"id":"er","label":"er","gs":["er"],"pos":"end","words":[["her","er"],["sister","er"],["winter","er"]]},
{"id":"ar","label":"ar","gs":["ar"],"pos":"end","words":[["car","ar"],["far","ar"],["jar","ar"]]}]},
{"kind":"rsounds","title":"Review","sub":"Mix of the last stages","section":"Sounds","covers":[8,9]},
{"kind":"words","title":"Animals 1/3","sub":"bee, bird, cat, hen, cow...","section":"Words","words":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck"],"topicAll":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","fish","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra"],"odd":"an animal","oddPool":["bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"words","title":"Animals 2/3","sub":"fish, elephant, frog, giraffe, goat...","section":"Words","words":["fish","elephant","frog","giraffe","goat","hippo","horse","lizard"],"topicAll":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","fish","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra"],"odd":"an animal","oddPool":["bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"words","title":"Animals 3/3","sub":"monkey, mouse, bear, sheep, snake...","section":"Words","words":["monkey","mouse","bear","sheep","snake","crab","tiger","zebra"],"topicAll":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","fish","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra"],"odd":"an animal","oddPool":["bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[11,12,13]},
{"kind":"words","title":"Body and face","sub":"arm, ear, eye, face, feet...","section":"Words","words":["arm","ear","eye","face","feet","hand","mouth","nose","teeth"],"topicAll":["arm","ear","eye","face","feet","hand","mouth","nose","teeth"],"odd":"part of the body","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"words","title":"Family and friends","sub":"baby, brother, sister, father, grandma...","section":"Words","words":["baby","brother","sister","father","grandma","grandpa","mother"],"topicAll":["baby","brother","sister","father","grandma","grandpa","mother"],"odd":"a family member","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window"]},
{"kind":"words","title":"Food and drink 1/2","sub":"apple, banana, bread, burger, carrot...","section":"Words","words":["apple","banana","bread","burger","carrot","chicken"],"topicAll":["apple","banana","bread","burger","carrot","chicken","fries","chocolate","egg","fish","ice-cream","lemon-juice"],"odd":"food or drink","oddPool":["arm","ear","eye","face","feet","hand","mouth","nose","teeth","bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[15,16,17]},
{"kind":"words","title":"Food and drink 2/2","sub":"fries, chocolate, egg, fish, ice cream...","section":"Words","words":["fries","chocolate","egg","fish","ice-cream","lemon-juice"],"topicAll":["apple","banana","bread","burger","carrot","chicken","fries","chocolate","egg","fish","ice-cream","lemon-juice"],"odd":"food or drink","oddPool":["arm","ear","eye","face","feet","hand","mouth","nose","teeth","bus","car","truck","boat","motorbike","plane","ship","train","balloon","puzzle","tablet","robot","doll","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"words","title":"Transport","sub":"bus, car, truck, boat, motorbike...","section":"Words","words":["bus","car","truck","boat","motorbike","plane","ship","train"],"topicAll":["bus","car","truck","boat","motorbike","plane","ship","train"],"odd":"transport","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"]},
{"kind":"words","title":"Toys","sub":"ball, balloon, puzzle, tablet, robot...","section":"Words","words":["ball","balloon","puzzle","tablet","robot","doll"],"topicAll":["ball","balloon","puzzle","tablet","robot","doll"],"odd":"a toy","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[19,20,21]},
{"kind":"words","title":"Time","sub":"afternoon, morning, night","section":"Words","words":["afternoon","morning","night"],"topicAll":["afternoon","morning","night"],"odd":"a time of day","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt"]},
{"kind":"words","title":"Sports and hobbies 1/2","sub":"draw, basketball, racket, bicycle, jump...","section":"Words","words":["draw","basketball","racket","bicycle","jump","football"],"topicAll":["draw","basketball","racket","bicycle","jump","football","kite","piano","run","sing","throw","read"],"odd":"a sport or hobby","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt"]},
{"kind":"words","title":"Sports and hobbies 2/2","sub":"kite, piano, run, sing, throw...","section":"Words","words":["kite","piano","run","sing","throw","read"],"topicAll":["draw","basketball","racket","bicycle","jump","football","kite","piano","run","sing","throw","read"],"odd":"a sport or hobby","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[23,24,25]},
{"kind":"words","title":"Clothes 1/2","sub":"bag, cap, dress, glasses, handbag...","section":"Words","words":["bag","cap","dress","glasses","handbag","jacket","trousers","shirt"],"topicAll":["bag","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","watch"],"odd":"clothes","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"words","title":"Clothes 2/2","sub":"shoes, shorts, skirt, socks, jeans...","section":"Words","words":["shoes","shorts","skirt","socks","jeans","t-shirt","watch"],"topicAll":["bag","cap","dress","glasses","handbag","jacket","trousers","shirt","shoes","shorts","skirt","socks","jeans","t-shirt","watch"],"odd":"clothes","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"words","title":"The home 1/3","sub":"armchair, bathtub, bathroom, bed, bedroom...","section":"Words","words":["armchair","bathtub","bathroom","bed","bedroom","box","camera","chair"],"topicAll":["armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window"],"odd":"in the home","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[27,28,29]},
{"kind":"words","title":"The home 2/3","sub":"clock, door, flower, stairs, garden...","section":"Words","words":["clock","door","flower","stairs","garden","lamp","mat","mirror"],"topicAll":["armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window"],"odd":"in the home","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"words","title":"The home 3/3","sub":"photo, radio, sofa, table, tree...","section":"Words","words":["photo","radio","sofa","table","tree","wall","window"],"topicAll":["armchair","bathtub","bathroom","bed","bedroom","box","camera","chair","clock","door","flower","stairs","garden","lamp","mat","mirror","photo","radio","sofa","table","tree","wall","window"],"odd":"in the home","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"words","title":"School 1/2","sub":"board, book, paint, crayons, eraser...","section":"Words","words":["board","book","paint","crayons","eraser","paper"],"topicAll":["board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"],"odd":"in school","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]},
{"kind":"rwords","title":"Review","sub":"Mix of the last stages","section":"Words","covers":[31,32,33]},
{"kind":"words","title":"School 2/2","sub":"pen, pencil, ruler, school, wrong...","section":"Words","words":["pen","pencil","ruler","school","wrong","right"],"topicAll":["board","book","paint","crayons","eraser","paper","pen","pencil","ruler","school","wrong","right"],"odd":"in school","oddPool":["bee","bird","cat","hen","cow","crocodile","dog","donkey","duck","elephant","frog","giraffe","goat","hippo","horse","lizard","monkey","mouse","bear","sheep","snake","crab","tiger","zebra","arm","ear","eye","face","feet","hand","mouth","nose","teeth","baby","brother","sister","father","grandma","grandpa","mother","apple","banana","bread","burger","carrot","fries","chocolate","ice-cream","lemon-juice","bus","car","truck","boat","motorbike","plane","ship","train"]}]}};
