
function deposit() {
    // Retrieve input values from the deposit form
    const depositAmount = parseFloat(document.getElementById('damount').value.trim());
    const accountNum = document.getElementById('daccount').value.trim();

    // Check if any field is empty or if deposit amount is invalid
    if (!accountNum || isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount and account number.");
        return; // Stop function execution if fields are empty or deposit is invalid
    }

    // Check if the account number exists in localStorage
    const storedDetail = localStorage.getItem(accountNum);
    if (storedDetail) {
        // Parse the stored user details
        const userDetail = JSON.parse(storedDetail);

        // Add the deposit amount to the current balance
        userDetail.balance = (userDetail.balance || 0) + depositAmount;

        // Update the localStorage with the new balance
        localStorage.setItem(accountNum, JSON.stringify(userDetail));

       // Show success alert using SweetAlert
       Swal.fire({
       icon: 'success',
       title: 'Success',
       text: 'Amount added successfully!',
       background: '#6e63ff', // Light green background for success
       color: 'white', // Dark green text color
       iconColor: 'white', // Matching icon color
       confirmButtonColor: 'green', // Confirm button color
});


        // Update the result section to show the current balance
        document.getElementById('result').innerText = "Your Current Balance: ${userDetail.balance.toFixed(2)}";
    } else {
        alert("Incorrect account number.");
    }

    // Clear the input fields after deposit attempt
    document.getElementById('damount').value = '';
    document.getElementById('daccount').value = '';

    return false; // Prevent form submission
}

    






function withdraw() {
    // Retrieve input values from the withdrawal form
    const withdrawAmount = parseFloat(document.getElementById('wamount').value.trim());
    const accountNum = document.getElementById('waccount').value.trim();

    // Check if any field is empty or if the withdrawal amount is invalid
    if (!accountNum || isNaN(withdrawAmount) || withdrawAmount <= 0) {
        // Show a native alert box for invalid input
        alert('Please enter a valid amount and account number.');
        return; // Stop function execution if fields are empty or withdrawal is invalid
    }

    // Check if the account number exists in localStorage
    const storedDetail = localStorage.getItem(accountNum);
    if (storedDetail) {
        // Parse the stored user details and get the balance
        const userDetail = JSON.parse(storedDetail);
        const currentBalance = userDetail.balance || 0;

        // Show the bank balance before withdrawal
        alert(`Bank Balance before withdrawal: ${currentBalance.toFixed(2)}`);

        // Check if the account has sufficient balance
        if (currentBalance >= withdrawAmount) {
            // Show the withdrawal amount to the user
            alert(`Withdrawal Amount: ${withdrawAmount.toFixed(2)}`);

            // Deduct the withdrawal amount from the current balance
            userDetail.balance = currentBalance - withdrawAmount;

            // Update the localStorage with the new balance
            localStorage.setItem(accountNum, JSON.stringify(userDetail));

            // Show a success alert box
            Swal.fire({
                icon: 'success',
                iconColor: 'white',
                title: 'Success',
                background: 'green', // Correct property for background color
                confirmButtonColor: 'blue', // Confirm button color
                color: 'white', // Text color
                text: 'Your amount has been successfully withdrawn.',
            });
            

            // Show the new balance after withdrawal
            alert("After Withdrawal Balance: ${userDetail.balance.toFixed(2)}");

            // Update the result section to show the current balance
            document.getElementById('wresult').innerText =" Your Current Balance: ${userDetail.balance.toFixed(2)}";
        } else {
            // Show an alert box for insufficient balance
            alert('You do not have enough balance for this withdrawal.');
        }
    } else {
        // Show an alert box for an invalid account number
        alert('The entered account number is incorrect.');
    }

    // Clear the input fields after the withdrawal attempt
    document.getElementById('wamount').value = '';
    document.getElementById('waccount').value = '';

    return false; // Prevent form submission
}
