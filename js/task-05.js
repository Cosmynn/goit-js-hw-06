const usernameInputField = document.getElementById('name-input');
const greetingUsername = document.getElementById('name-output');

usernameInputField.addEventListener('input', function() {
  const username = usernameInputField.value;
  greetingUsername.textContent = username;
});