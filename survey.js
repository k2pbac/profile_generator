const { create } = require('domain');
const readline = require('readline');
const answers = [];
const questions = [
`Welcome to Kris' Profile Generator (hit enter to start, type exit to quit)`,
`What's your name? Nicknames are also acceptable `,
`What's an activity you like doing? `,
`What do you listen to while doing that? `,
`What's your favourite thing to eat? `,
`Which meal is your favourite (eg: dinner, brunch, etc.) `,
`Which sport is your absolute favourite? `,
`What is your superpower? In a few words, tell us what you are amazing at! `
];
const sentences = [
  `Thank you for completing this survey!`,
  `Your profile description will be as follows:`,
  '',
  'loves ',
  `while listening to `,
  `devouring `,
  'for ',
  `prefers `,
  `over any and other sport, and would love to have the super power of `
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createParagraph = (answers) => {
  return answers.map((answer,index) => index !== answers.length-1 
  ? sentences[index+1]+=answer +"," : sentences[index+1]+=answer +".").join(" ");
};

const feedQuestion = (questions) => {
  rl.question(questions[0] || 'Thank you for completing this survey (press enter to see your results)' , (answer) => {
    if (answer == 'exit' || questions.length === 0) //we need some base case, for recursion
    {
      console.log(createParagraph(answers));
      return rl.close();
    }
    else{
    answers.push(answer);
    feedQuestion(questions.slice(1));
    }
  });
}

feedQuestion(questions);
