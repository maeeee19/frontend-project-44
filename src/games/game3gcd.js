import runGame from "./index.js";

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const generateQuestionAndAnswer = () => {

    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    const question = `${num1} ${num2}`;

    let correctAnswer;

    while (num1 != 0 & num2 != 0) {
        if (num1 > num2) {
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }
    
    correctAnswer = num1 + num2;

    return { question, correctAnswer: correctAnswer.toString() };
};

export function thirdPlay () {
    runGame(gameDescription, generateQuestionAndAnswer);
};