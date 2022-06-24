// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],

  ["prescription for phlegm", "prescription for cough", "prescription for running nose", "prescription for sore throat"],
  ["prescription for joint pain", "prescription for hand pain", "prescription for back pain", "prescription for leg pain"],
  ["i have stomach pain", "i feel pukish", "i feel nauseous"],
  ["my eyes are red", "eye is itchy"],
  ["i am good", "i am alright", "its all good with me"],
  ["bye", "good bye", "goodbye", "see you later", "see you"],
  [""]
]
  


// Possible responses

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","sup? how's it going?"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],

 
  ["Panadol x2 three times a day after meals Amoxcillin 500mg x1 3 times a day after meals. Piriton x1/2 morning/night after meals"], 
  ["Iodex balm", "moov spray", "Siddhalepa balm", "Volini pain relief spray"],
  ["Have some spirit water"],
  ["try anti bacterial eyedrops", "try rinsing your eyes with cold water"],
  ["That is good to hear. How can i help you?", "I am glad to hear that. How can i help you?"],
  ["Bye", "Goodbye", "See you later"],
  [""]
]



// Random for any other user input

const alternative = [
  "I did not understand. Can you rephrase?",
  "Beg your pardon?",
  "Try telling me 'i have gastritis'",
  "I am sorry my intelligence is limited. Try a remedy for something else?"
]




//keyword responsess

const cancer =  ["Go see a doctor now!!", "Consult a doctor ASAP!!", "I am sorry i dont have prescriptions for that. Try seeing a doctor"]
const gastritis = ["Have omeprezole x1 three times a day thirty minutes before meals", "Have digene x1 three times a day thirty minutes before meals"]
const agree =  ["Mhmm. Anything else?", "yeah. so anything else you want to ask?"]
const no =  ["Okay then. Goodbye!", "Sure thing. Have a great day!"]