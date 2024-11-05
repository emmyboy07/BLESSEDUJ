document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored password for the entered username
    const storedPassword = localStorage.getItem(username);

    // Check if the username exists and if the password matches
    if (storedPassword && storedPassword === password) {
        localStorage.setItem('loggedIn', 'true'); // Set the login status in local storage
        window.location.href = 'index.html'; // Redirect to the main index page
    } else {
        document.getElementById('error-message').innerText = "Invalid username or password!";
    }
});
