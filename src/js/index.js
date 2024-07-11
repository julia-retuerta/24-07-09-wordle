// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');
const inputTypeSolutionElement = document.getElementById('input-type-solution');
const lettersContainerElement = document.getElementById('letters-container');

const SOLUTION_WORDS = ['pan', 'buzo', 'hielo', 'bosque'];

const NUMBER_OF_TRIES = 5;

let secretWord = '';
let currentRow = 0;

const chooseSecretWord = () => {
  const randomNumber = Math.floor(Math.random() * SOLUTION_WORDS.length);
  secretWord = SOLUTION_WORDS[randomNumber];
};

const createGameBoard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < NUMBER_OF_TRIES; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('letters-container__row');

    for (let j = 0; j < secretWord.length; j++) {
      const newLetterContainer = document.createElement('span');
      newLetterContainer.classList.add('letter-box');
      newRow.append(newLetterContainer);
    }
    fragment.append(newRow);
  }

  lettersContainerElement.append(fragment);
};

const startGame = () => {
  chooseSecretWord();
  createGameBoard();
};

const printUserWord = userWord => {
  for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    lettersContainerElement.children[currentRow].children[i].textContent = letter;
  }
  currentRow++;
};

startGame();

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const userWord = event.target.word.value;
  if (secretWord.length !== userWord.length) {
    console.log(`La palabra tiene que tener ${secretWord.length} letras.`);
    return;
  }
  printUserWord(userWord);
  event.target.reset();
});

const compareWords = (userWord, secretWord) => {
  // const result = [];

  const userWordSeparated = userWord.split('');
  const secretWordSeparated = secretWord.split('');

  userWordSeparated.forEach(character => {
    if (secretWordSeparated.includes(character)) {
      lettersContainerElement.children[currentRow].children[i].classList.add('correct');
    } else {
      lettersContainerElement.children[currentRow].children[i].classList.add('incorrect');
    }
  });
};

compareWords();

//////////////////////////////////////

// const writeWordInBoxes = event => {
//   event.preventDefault();
//   const everyRow = document.querySelectorAll('.letters-container__row');

//   for (let i = 0; i < everyRow.length; i++) {
//     if (!everyRow[i].classList.contains('filled')) {
//       for (let j = 0; j < inputTypeSolutionElement.value.length; j++) {
//         everyRow[i].children[j].textContent = inputTypeSolutionElement.value.charAt(j);
//       }
//       everyRow[i].classList.add('filled');
//       return;
//     }
//   }
// };

// formElement.addEventListener('submit', writeWordInBoxes);

//////////////////////////////////////

// const solutionWord = 'hielo';

// const wordLength = event => {
//   event.preventDefault();
//   const userWord = inputTypeSolutionElement.value.toLowerCase();
//   if (inputTypeSolutionElement.length !== 5) {
//     alert('La palabra debe tener 5 letras');
//     return;
//   }
//   event.target.reset();
// };

// const compareWords = (solutionWord, userWord) => {
//   const result = [];
//   for (let i = 0; i < 5; i++) {
//     if (solutionWord.includes(userWord)) {
//       return 'Has acertado la palabra';
//     }
//   }
// };

// formElement.addEventListener('submit', wordLength);
