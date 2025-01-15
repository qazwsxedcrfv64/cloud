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

// Example usage
try {
    const fluidOunces = 16; // Replace with desired value
    const cups = convertFluidOuncesToCups(fluidOunces);
    console.log(`${fluidOunces} fluid ounces is equal to ${cups} cups.`);
} catch (error) {
    console.error(error.message);
}

// Export the function for reuse in other modules
module.exports = convertFluidOuncesToCups;