import runGame from '../index.js';
import random from '../helper.js';

const gameDescription = 'What number is missing in the progression?';

export const generateQuestionAndAnswer = () => {

    const start = random();
    const diff = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 6) + 5;

    const generateProgression = () => {
        const progression = [];
        for (let i = 0; i < length; i += 1) {
          progression.push(start + diff * i);
        }
        return progression;
    };

    const emtyElement = (progression, emtyElementIndex) => {
        const progressionWithEmtyElement = progression.slice();
        progressionWithEmtyElement[emtyElementIndex] = '..';
        return progressionWithEmtyElement.join(' ');
    };

    const progression = generateProgression(start, diff, length);

    const emptyIndex = Math.floor(Math.random() * length);

    const question = emtyElement(progression, emptyIndex);

    const correctAnswer = progression[emptyIndex];

    return { question, correctAnswer: correctAnswer.toString() };
};

function fourthPlay() {
    runGame(gameDescription, generateQuestionAndAnswer);
}

export default fourthPlay;
