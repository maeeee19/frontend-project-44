import runGame from "./index.js";

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionAndAnswer = () => {
    let num = Math.floor(Math.random() * 100) + 1;
    
    const question = `${num}`;

    let correctAnswer;

    if (num % 2 !== 0) {
        correctAnswer = 'no';
    } else {
        correctAnswer = 'yes';
    }

    return { question, correctAnswer };
};

export function firstPlay () {
    runGame(gameDescription, generateQuestionAndAnswer);
};