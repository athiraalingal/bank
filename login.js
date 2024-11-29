function login() {
    // Retrieve input values from the login form
    const accountNumber = document.getElementById('account_number').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Check if any field is empty
    if (!accountNumber || !passwordInput) {
        alert("Please enter both account number and password.");
        return; // Stop function execution if fields are empty
    }

    // Check if the account number exists in localStorage
    const storedDetails = localStorage.getItem(accountNumber);

    if (storedDetails) {
        // Parse the stored user details
        const userDetails = JSON.parse(storedDetails);

        // Validate the entered password with the stored password
        if (userDetails.password === passwordInput) {
            alert("Login successful!");

            

            // Redirect to a dummy services page
            window.location.href ='./services.html';
        } else {
            alert("Invalid password. Please try again.");
        }
    } else {
        alert("User not found. Please check the account number or register first.");
    }

    // Clear the input fields after login attempt
    document.getElementById('account_number').value = '';
    document.getElementById('password').value = '';
}