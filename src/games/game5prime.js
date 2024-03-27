import random from '../helper.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateQuestionAndAnswer = () => {
  const num = random();

  const question = `${num}`;

  let correctAnswer;

  const isPrime = () => {
    for (let i = 2; i < num; i += 1) {
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

function fifthPlay() {
  runGame(gameDescription, generateQuestionAndAnswer);
}

export default fifthPlay;
