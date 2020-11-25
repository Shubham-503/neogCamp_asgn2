var chalk = require("chalk");
var readlineSync = require("readline-sync");

console.log(
  chalk.yellow("Welcome to " + chalk.red.underline("The IRON MAN ") + "Game")
);
console.log(
  chalk.yellow.bold(
    "Are you the biggest IRON MAN Fan,\nTake this quiz and find out"
  )
);
user = readlineSync.question(chalk.blue("Write your name?\n"));
console.log(chalk.green("Welcome "), chalk.green(user), "\n");
console.log(
  chalk.magenta(
    "Read Instructions Carefully\na)This Quiz has 10 questions\nb)+1 Mark for correct response\nc)-1 Mark for incorrect response\n"
  )
);
var score = 0;
var data = [
  {
    question:
      chalk.blue("What is Iron Man's alter ego?\n") +
      chalk.yellow("a)Sony Stark\nb)Tony Stark \nc)Tony Hart\nd)Tony Tiger\n"),
    answer: "b",
  },
  {
    question:
      chalk.blue("In what year did Iron Man make its debut in theatres?\n") +
      chalk.yellow("a)2012\nb)2010\nc)2008\nd)2015\n"),
    answer: "c",
  },
  {
    question:
      chalk.blue(
        "What is the name of the new AI that is in charge of Tony's suit? \n"
      ) + chalk.yellow("a)Jarvis\nb)Friday\nc)Vision\nd)May\n"),
    answer: "b",
  },
  {
    question:
      chalk.blue(
        "What is the name of the missile Tony Stark demonstrates during the beginning of the 2008's Iron Man?\n"
      ) +
      chalk.yellow(
        "a)The Big Boy\nb)The Jericho\nc)Come Get Some\nd)The Big Kahuna\n"
      ),
    answer: "b",
  },
  {
    question:
      chalk.blue(
        "What food does Tony Stark ask for prior to going to the hospital during Iron Man (2008)?\n"
      ) +
      chalk.yellow("a)cheeseburger\nb)Milkshake\nc)Falafel\nd)Curly Fries\n"),
    answer: "a",
  },
  {
    question:
      chalk.blue(
        "Stan Lee based Tony Stark on which of the following real-life playboys?\n"
      ) +
      chalk.yellow(
        "a)Howard Hughes\nb)Richard Branson\nc)Elon Musk\nd)Hugh Hefner\n"
      ),
    answer: "a",
  },
  {
    question:
      chalk.blue(
        "During the first Iron Man film, what does Tony use to prevent shrapnel from entering his heart?\n"
      ) +
      chalk.yellow(
        "a)Wind Power technology\nb)Biotechnology\nc)Nanotechnology\nd)A Minature Arc Reactor\n"
      ),
    answer: "d",
  },
  {
    question:
      chalk.blue(
        "Which of the following characters had a neck tattoo of Captain America's shield with an anarchist 'A' where the star should be?\n"
      ) +
      chalk.yellow(
        "a)Iron Man\nb)Aldrich Killian\nc)Whiplash\nd)The Mandarin\n"
      ),
    answer: "d",
  },
  {
    question:
      chalk.blue("Which college did Tony Stark go to?\n") +
      chalk.yellow("a)Harvard\nb)Stanford\nc)MIT\nd)Yale\n"),
    answer: "c",
  },
  {
    question:
      chalk.blue(
        "Which of the following matches the address Tony Stark revealed to the world in Iron Man 3?\n"
      ) +
      chalk.yellow(
        "a)2000 Beverley Hills Drive\nb)2814 Guardian Blvd, Coast City\nc)10880 Malibu Point\nd)82 Yancy Street\n"
      ),
    answer: "c",
  },
];

function quiz(question, answer) {
  ans = readlineSync.question(question);

  if (ans.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!!!"));
    score++;
  } else {
    console.log(chalk.red("Oops Wrong!!!"));
    console.log(chalk.green("Right answer is ", answer));
    score--;
  }
  console.log(chalk.blackBright("Your Score : "), score);
  console.log("----------------------------------------------\n");
}

for (var i = 0; i < data.length; i++) {
  quiz(data[i].question, data[i].answer);
}

console.log(chalk.blackBright("Your final score is ", score));

var wallOfFame = [
  {
    name: "Shubham",
    score: "8",
  },
  {
    name: "Saurya",
    score: "6",
  },
  {
    name: "Sitanshu",
    score: "4",
  },
];

if (score > wallOfFame.length - 1) {
  console.log(
    chalk.blue.bgRed(
      "Congratulations!!!,You created a record\nSend me a screenshot of this and get your name on Wall of Fame \n"
    )
  );
}
console.log(chalk.blue("Wall of Fame") + "\n-----------------");
for (var i = 0; i < wallOfFame.length; i++) {
  console.log(chalk.gray(wallOfFame[i].name, " : ", wallOfFame[i].score));
}
