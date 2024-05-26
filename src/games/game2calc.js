import runGame from '../index.js';
import random from '../helper.js';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Invalid operation');
  }
};

export const generateQuestionAndAnswer = () => {
  const num1 = random();
  const num2 = random();

  const operationNumber = Math.floor(Math.random() * 3);

  const question = `${num1} ${operations[operationNumber]} ${num2}`;

  const correctAnswer = calculateResult(num1, num2, operations[operationNumber]);

  return { question, correctAnswer: correctAnswer.toString() };
};

function secondPlay() {
  runGame(gameDescription, generateQuestionAndAnswer);
}

export default secondPlay;
