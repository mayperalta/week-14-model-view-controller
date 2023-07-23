// Get the logout button element
const logoutButton = document.querySelector('#logout-button');

// Add event listener to the logout button
if (document.querySelector('#logout-button')) {


  logoutButton.addEventListener('click', () => {
    // Simulate logout functionality
    // Replace this with your actual logout logic
    // For example, you may clear session storage, remove authentication tokens, or perform other necessary actions

    // Redirect the user to the login page after logout
    window.location.href = 'login.html';
  });
}