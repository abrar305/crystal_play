// =====================================================================================
//  CRYSTAL PLAY - content file.
//  You only need to ADD FILES (pictures and audio). You do not need to edit this file.
//  The list of files to add is in FILES-NEEDED.txt.  Open your-site/#check to see what is still missing.
// =====================================================================================

// >>> Settings (you can change these numbers if you want)
const GAME = {
  rounds: 10,             // questions in one stage
  reviewRounds: 12,       // questions in a Review
  gemsPerCorrect: 1,      // gems for an answer that is right on the first try
  unlock: "order"         // "order" = the next stage opens after finishing the one before.  "free" = everything is open.
};

// >>> The words the game says. You can change them or add more.
const PRAISE   = ["Great job!", "Awesome!", "You got it!", "Super!", "Fantastic!", "Well done!", "Brilliant!"];
const TRYAGAIN = ["Oops, try again!", "Almost! Try again", "Have another go!", "You can do it!"];
const MASCOT   = { hello: "Let's play!", good: ["Yes!", "Wow!", "Yay!"], bad: ["Hmm...", "Try again!", "Almost!"], win: "You did it!" };
