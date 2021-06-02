var readlineSync = require("readline-sync") 
var chalk= require("chalk")
var score=0;
var playerName= readlineSync.question(chalk.cyan('May I know your Name: '));
console.log(chalk.cyan('Hi ')+chalk.white.underline(playerName));
var playerAgree= readlineSync.question(chalk.cyan("Are you Ready to play Harry Potter Quiz (yes/no): "));

if(playerAgree=== 'yes'){
  function play(question,answer){
    var playerAnswer=readlineSync.question(question);
    if(playerAnswer===answer){
      console.log(chalk.black.bgGreen.bold('Congrats, your have right'));
      score=score+1;
    }else{
      console.log(chalk.black.bgRed.bold("Oops!; you are wrong"));
      score=score-1;
    }
  }
  var questions=[{
    question: chalk.cyan('What is the name of dragon that cedric diggory faced in Triwizard Tournament: Chinese ........: '),
    answer: "fireball"
  },{
    question: chalk.cyan("What was the name of 3-headed dog that was guarding the Philospher's stone: "),
    answer: "fluffy",
  },{
    question: chalk.cyan('How old you have to be to put your name in Goblet of Fire: '),
    answer: "17",
  },{
    question: chalk.cyan("What was the name of Hagrid's half brother: "),
    answer: "grawp",
  },{
    question: chalk.cyan("What is the number of Harry Potter's vault at Gringotts: "),
    answer: "687",
  }
  ]
  for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  console.log(chalk.green("Your final score i: ")+chalk.bold.red( score))
}
else{
  console.log(chalk.green("You are missing something good"));
}
