import { random } from "../helper.js";
import runGame from "../index.js";

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateQuestionAndAnswer = () => {

    let num = random();

    const question = `${num}`;

    let correctAnswer;

    const isPrime = () => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
          }
          return num !== 1;
    };
    
    if (isPrime(num) === true) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    }

    return { question, correctAnswer: correctAnswer.toString() };
};

export function fifthPlay () {
    runGame(gameDescription, generateQuestionAndAnswer);
};