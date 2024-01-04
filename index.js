// a) function to generate thankyou message
function writeCards(names, occassion) {
    const thankYouMessages = [];

    for(const name of names) {
        const message = `Thankyou, ${name} for the wonderful ${occasion} gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

// b)function to countdown numbers

function countDown(number) {
    for (let i = number; i > 0; i --){
        console.log(i);
    }
}

const names = ['Guadalupe', 'Ollie', 'Aki'];
const occasion = "surprise";
const thankYouMessages = writeCards(names,occassion);
console.log(thankYouMessages);

const countdownNumber = 5;
countDown(countdownNumber);