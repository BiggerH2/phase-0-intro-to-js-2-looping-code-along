// The for loop example
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// Using a for loop with arrays
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

// Function to create thank you cards
function writeCards(names, eventName) {
  const thankYouCards = [];

  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return thankYouCards;
}

// Testing the writeCards function
const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);

// Function to count down from a given positive integer
function countDown(startingNumber) {
  let count = startingNumber;

  while (count >= 0) {
    console.log(count);
    count--;
  }
}

// Testing the countDown function
countDown(10);
