const passwordFields = Array.from(document.querySelectorAll('input[type=password]'));
const passwordErrorMessage = document.querySelector('.error+span')

function comparePasswords() {
  return passwordFields[0].value == passwordFields[1].value  && passwordFields.every(field => field.value != '');
}

function updateFieldValidity() {
  if (comparePasswords()) {
    passwordFields.forEach(field => {
      field.classList.add('valid');
      field.classList.remove('error');
    })
    passwordErrorMessage.textContent = '';
  } else {
    passwordFields.forEach(field => {
      field.classList.add('error');
      field.classList.remove('valid');
    })
    passwordErrorMessage.textContent = '* Passwords do not match';
  }
}

passwordFields.forEach((field) => field.addEventListener("input", updateFieldValidity));
