const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', function() {
  const input = inputField.value;
  const lengthCondition = parseInt(inputField.getAttribute('data-length'), 10);
  console.log(lengthCondition)
    if (input.length === lengthCondition) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
  }
});