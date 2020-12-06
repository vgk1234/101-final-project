function setup() {

}

// function draw() {
// }

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");

choiceA.mouseclicked();
choiceB.mouseclicked();
choiceC.mouseclicked();

let friendA = 0;
let friendB = 0;
let friendC = 0;

let questions = [{
    question: "How much do you really want to talk to someone?",
    choiceA: "It’s not exactly urgent, but there are times when I feel kind of bored and I just want to talk.",
    choiceB: "It’s a bit empty where I am right now, and a conversation would be nice.",
    choiceC: "I really need a friend because I feel so lost, and I’m not interested in small talk."
  },
  {
    question: "What do you look for in a friend?",
    choiceA: "Someone who is approachable",
    choiceB: "Someone who is resourceful and I can have intelligent conversations with",
    choiceC: "Someone who is emotionally aware and can form close connections with me"
  },
  {
    question: "What are your hobbies?",
    choiceA: "Artsy - Eg. Sketching / painting, editing photos / videos, fashion",
    choiceB: "Device related - Eg. Gaming, watching movies, online chat",
    choiceC: "Domestic - Eg. Cooking / baking, home decorating, home workouts"
  },
  {
    question: "If you could go outside, what kind of place would you like to be in?",
    choiceA: "The mall, or some kind of shopping / food hub",
    choiceB: "A convention or a library",
    choiceC: "Some place where I can just observe nature"
  },
  {
    question: "How would you describe your personality?",
    choiceA: "I’m really outgoing and I love to make plans!",
    choiceB: "I like to keep to myself and am a bit more observant.",
    choiceC: "I’m really emotional / sensitive , I’m not so vocal but I have so much in my heart to give!"
  },
  // {
  //   question: "How would you like to talk to your new friend?",
  //   choiceA: "Voice call", 
  //   choiceB: "Text"
  // }
];



const lastQuestion = questions.length - 1;

let runningQuestion = 0;

function renderQuestion() {

  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "<p>";
  choiceA.innerHTML = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC

}

function renderProgress() {
  for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class = 'prog' id = "+ qIndex +"></div>"
  }
}



start.addEventListener("click", startQuiz);

// How much do you really want to talk to someone?
// - It’s not exactly urgent, but there are times when I feel kind of bored and I just want to talk.
// - It’s a bit empty where I am right now, and a conversation would be nice.
// - I really need a friend because I feel so lost, and I’m not interested in small talk.

// What do you look for in a friend?
// - Someone who is approachable
// - Someone who is resourceful and I can have intelligent conversations with
// - Someone who is emotionally aware and can form close connections with me

// What are your hobbies?
// - Domestic - Eg. Cooking / baking, home decorating, home workouts
// - Device related - Eg. Gaming, watching movies, online chat
// - Artsy - Eg. Sketching / painting, editing photos / videos, fashion

// If you could go outside, what kind of place would you like to be in?
// - The mall, or some kind of shopping / food hub
// - Some place where I can just observe nature
// - A convention or concert

// How would you describe your personality?
// - I’m really outgoing and I love to make plans!
// - I like to keep to myself and am a bit more observant.
// - I’m really emotional / sensitive , I’m not so vocal but I have so much in my heart to give!