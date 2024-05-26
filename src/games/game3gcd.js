import runGame from '../index.js';
import random from '../helper.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  let temp1 = num1;
  let temp2 = num2;
  while (temp1 !== 0 && temp2 !== 0) {
    if (temp1 > temp2) {
      temp1 %= temp2;
    } else {
      temp2 %= temp1;
    }
  }

  return temp1 + temp2;
};

export const generateQuestionAndAnswer = () => {
  const num1 = random();
  const num2 = random();

  const question = `${num1} ${num2}`;

  const correctAnswer = gcd(num1, num2);

  return { question, correctAnswer: correctAnswer.toString() };
};

function thirdPlay() {
  runGame(gameDescription, generateQuestionAndAnswer);
}

export default thirdPlay;
