const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formFields = loginForm.elements;
  const credentials = {};

  for (let i = 0; i < formFields.length; i++) {
    const element = formFields[i];
    if (element.type !== 'submit') {
      credentials[element.name] = element.value;
    }
  }

  const allFieldsFilled = Object.values(credentials).every(value => value !== '');

  if (allFieldsFilled) {
    console.log(credentials);
    loginForm.reset();
  } else {
    alert('All fields must be filled!');
  }
});
