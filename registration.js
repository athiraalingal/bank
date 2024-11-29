

function adddetails() {
    // Retrieve input values
    const name = document.getElementById('username').value.trim();
    const number = document.getElementById('usernumber').value.trim();
    const password = document.getElementById('userpassword').value.trim();

    // Check if any field is empty
    if (!name || !number || !password) {
        alert("Please fill in all the fields.");
        return; // Stop function execution if fields are empty
    }

    // Check if the account number already exists in localStorage
    if (localStorage.getItem(number)) {
        alert("Account number already registered. Please use a different account number.");
    } else {
        // Create a new employee object
        const details = {
            name: name,
            number: number,
            password: password
        };

        // Store the user details in localStorage using the account number as the key
        localStorage.setItem(number, JSON.stringify(details));
        alert("Registration successful!");

        // Redirect to login page
        window.location.href = "login.html"; // Redirect immediately on page load

    }

    // Clear the input fields after registration
    document.getElementById('username').value = '';
    document.getElementById('usernumber').value = '';
    document.getElementById('userpassword').value = '';
}
