// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');
const inputTypeSolutionElement = document.getElementById('input-type-solution');
const letterBoxElement = document.getElementById('letter-box');

const typeSolution = event => {
  event.preventDefault();
  if (!event.target.value) return;
  event.target.reset();
};

formElement.addEventListener('input', typeSolution);
