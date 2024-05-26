import runGame from '../index.js';
import random from '../helper.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => { return number % 2 === 0; };

export const generateQuestionAndAnswer = () => {
  const num = random();

  const question = `${num}`;

  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return { question, correctAnswer };
};

function firstPlay() {
  runGame(gameDescription, generateQuestionAndAnswer);
}

export default firstPlay;
