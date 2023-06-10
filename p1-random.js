/*
    CIT 281 Project 1
    Name: Noah Clement
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const letters = 'abcdefghijklmnopqrstuvwxyz';
let length = getRandomInteger(5,26);

let randString = '';
for (let i = 0; i <= length; i++){
    let randLet = getRandomInteger(0, letters.length);
    randString += letters[randLet];
}

console.log(randString);

