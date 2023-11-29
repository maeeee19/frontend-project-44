import readlineSync from 'readline-sync';

export function firstPlay () {

    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);

    let correctAnswer = 0; 
    
    while (correctAnswer < 3) {

        let num = Math.floor(Math.random()*100) + 1;
    

        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        console.log('Question:'+ num);

        let answer = readlineSync.question('Your answer:');

        if (num % 2 !== 0) {

            if  (answer === 'no') {
                console.log('Correct!');
                correctAnswer += 1
            } else {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name} !`)
                return;
            }

        } else {

            if  (answer === 'yes') {
                console.log('Correct!');
                correctAnswer +=1
            } else {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name} !`)
                return;
            }
        }
    }
};