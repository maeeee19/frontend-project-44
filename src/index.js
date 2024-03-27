import readlineSync from 'readline-sync';

const runGame = (gameDescription, gameLogic) => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n${gameDescription}`);

  const winCount = 3;
  let correctAnswerCount = 0;

  while (correctAnswerCount < winCount) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('You answer:');

    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
