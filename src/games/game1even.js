import runGame from "../index.js";
import random from "../helper.js";

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionAndAnswer = () => {
  const num = random();

  const question = `${num}`;

  let correctAnswer;

  if (num % 2 !== 0) {
    correctAnswer = "no";
  } else {
    correctAnswer = "yes";
  }

  return { question, correctAnswer };
};

function firstPlay() {
  runGame(gameDescription, generateQuestionAndAnswer);
}

export default firstPlay;
