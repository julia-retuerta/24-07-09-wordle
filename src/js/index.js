// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');
const inputTypeSolutionElement = document.getElementById('input-type-solution');
const lettersContainerElement = document.getElementById('letters-container');

const SOLUTION_WORDS = ['pan', 'buzo', 'hielo', 'bosque'];

const NUMBER_OF_TRIES = 5;

let secretWord;

const solutionWord = 'hielo';

const wordLength = event => {
  event.preventDefault();
  const userWord = inputTypeSolutionElement.value.toLowerCase();
  if (inputTypeSolutionElement.length !== 5) {
    alert('La palabra debe tener 5 letras');
    return;
  }
  event.target.reset();
};

const compareWords = (solutionWord, userWord) => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    if (solutionWord.includes(userWord)) {
      return 'Has acertado la palabra';
    }
  }
};

formElement.addEventListener('submit', wordLength);
