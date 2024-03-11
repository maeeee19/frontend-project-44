import runGame from "./index.js";

const gameDescription = 'What is the result of the expression?';

export const generateQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];

    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

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

export function secondPlay () {
    runGame(gameDescription, generateQuestionAndAnswer);
};