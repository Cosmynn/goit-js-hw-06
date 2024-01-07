const subtractButton = document.querySelector('[data-action="decrement"]');
const addButton = document.querySelector('[data-action="increment"]');
const initialCounterValue = document.getElementById('value');

let newCounterValue = 0;

subtractButton.addEventListener('click', function() {
  newCounterValue -= 1;
  initialCounterValue.textContent = newCounterValue;
});

addButton.addEventListener('click', function() {
  newCounterValue += 1;
  initialCounterValue.textContent = newCounterValue;
});