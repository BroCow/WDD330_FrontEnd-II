

const email = document.getElementById("mail");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Only an email address will work here! Please fix.");
  } else {
    email.setCustomValidity("");
  }
});

// email2.addEventListener("input", function (event) {
//     if (email2.validity.typeMismatch) {
//       email2.setCustomValidity("Only an email address will work here! Please fix.");
//     } else {
//       email2.setCustomValidity("");
//     }
//   });



  // There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email2 = document.getElementById("mail2");
const emailError = document.querySelector('#mail + span.error');

email2.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email2.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    email2Error.textContent = ''; // Reset the content of the message
    email2Error.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email2 field is valid, we let the form submit

  if(!email2.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email2.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    email2Error.textContent = 'You need to enter an e-mail address.';
  } else if(email2.validity.typeMismatch) {
    // If the field doesn't contain an email2 address,
    // display the following error message.
    email2Error.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email2.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    email2Error.textContent = `Email2 should be at least ${ email2.minLength } characters; you entered ${ email2.value.length }.`;
  }

  // Set the styling appropriately
  email2Error.className = 'error active';
}