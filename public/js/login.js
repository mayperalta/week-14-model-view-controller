const afterLoginPath = '/userexercise';

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace(afterLoginPath);
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const goal = document.querySelector('#goal-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, goal, gender }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(afterLoginPath);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('click', signupFormHandler);





  // // Get the login form element
// const loginForm = document.querySelector('#login-form');

// // Add event listener to the login form
// loginForm.addEventListener('submit', e => {
//   e.preventDefault(); // Prevent form submission

//   // Get the entered username and password values
//   const username = document.querySelector('#username').value;
//   const password = document.querySelector('#password').value;

//   // Perform basic validation
//   if (username && password) {
//     // Simulate login functionality
//     // Replace this with your actual login logic
//     if (username === 'admin' && password === 'password') {
//       // Successful login, redirect to the home page or perform necessary actions
//       window.location.href = 'home.html';
//     } else {
//       // Invalid credentials, display an error message
//       alert('Invalid username or password');
//     }
//   } else {
//     // Display an error message for missing credentials
//     alert('Please enter a username and password');
//   }
// });
