// A simple program to convert US Fluid Ounces to US Cups

// Conversion factor: 1 cup = 8 fluid ounces
const FLUID_OUNCES_PER_CUP = 8;

// Function to convert fluid ounces to cups
function convertFluidOuncesToCups(fluidOunces) {
    if (typeof fluidOunces !== 'number' || fluidOunces < 0) {
        throw new Error('Input must be a non-negative number');
    }

    return fluidOunces / FLUID_OUNCES_PER_CUP;
}

// Get user input from the command line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the amount in fluid ounces: ', (input) => {
    const fluidOunces = parseFloat(input);

    try {
        const cups = convertFluidOuncesToCups(fluidOunces);
        console.log(`${fluidOunces} fluid ounces is equal to ${cups} cups.`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});

// Export the function for reuse in other modules
module.exports = convertFluidOuncesToCups;
