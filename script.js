const passwordField = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.error+span')
const confirmPasswordField = document.querySelector('#confirm-password');

function comparePasswords() {
  return (passwordField.value == confirmPasswordField.value) && (passwordField.value != '' && confirmPasswordField.value != '');
}

function updateFieldValidity() {
  if (comparePasswords()) {
    passwordField.classList.remove('error');
    passwordField.classList.add('valid');
    confirmPasswordField.classList.remove('error');
    confirmPasswordField.classList.add('valid');
    passwordErrorMessage.textContent = '';
  } else {
    passwordField.classList.remove('valid');
    passwordField.classList.add('error');
    confirmPasswordField.classList.remove('valid');
    confirmPasswordField.classList.add('error');
    passwordErrorMessage.textContent = '* Passwords do not match';
  }
}

passwordField.addEventListener("input", updateFieldValidity);
confirmPasswordField.addEventListener("input", updateFieldValidity);
