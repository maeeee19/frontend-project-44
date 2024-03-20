import runGame from '../index.js';
import random from '../helper.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const generateQuestionAndAnswer = () => {

    let num1 = random();
    let num2 = random();

    const question = `${num1} ${num2}`;

    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 %= num2;
        } else {
            num2 %= num1;
        }
    }

    const correctAnswer = num1 + num2;

    return { question, correctAnswer: correctAnswer.toString() };
};

function thirdPlay() {
    runGame(gameDescription, generateQuestionAndAnswer);
}

export default thirdPlay;
