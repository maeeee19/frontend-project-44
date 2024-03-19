import runGame from '../index.js';
import { random } from '../helper.js';

const gameDescription = 'What is the result of the expression?';

export const generateQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];

    const num1 = random();
    const num2 = random();

    const operationNumber = Math.floor(Math.random() * 3);

    const question = `${num1} ${operations[operationNumber]} ${num2}`;

    let correctAnswer;

    if (operations[operationNumber] === '+') {
    correctAnswer = num1 + num2;
    } else if (operations[operationNumber] === '-') {
    correctAnswer = num1 - num2;
    } else if (operations[operationNumber] === '*') {
    correctAnswer = num1 * num2;
    }
    return { question, correctAnswer: correctAnswer.toString() };
};

function secondPlay() {
    runGame(gameDescription, generateQuestionAndAnswer);
}

export default secondPlay;
