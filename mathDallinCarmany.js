// Function to perform math operations
function performOperation(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        case "exponent":
            return Math.pow(num1, num2);
        default:
            return "Error: Invalid operation";
    }
}

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length !== 3) {
    console.error("Usage: node mathOperations.js <num1> <num2> <operation>");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2].toLowerCase();

if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
}

const result = performOperation(num1, num2, operation);
console.log(`Result: ${result}`);
