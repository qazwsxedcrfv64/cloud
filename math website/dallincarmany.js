document.getElementById('addition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    // Calculate the sum
    const sum = number1 + number2;

    // Display the result
    document.getElementById('result').textContent = `The result is: ${sum}`;
});
