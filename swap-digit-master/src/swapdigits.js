const swapDigits = (number) => {
    if (typeof number !== 'number' || isNaN(number) || number < 0) {
        return 0; // return 0 for invalid inputs
    }
    const digits = number.toString().split(''); // convert number to string and split into individual digits
    const numDigits = digits.length;
    if (numDigits < 2) {
        return number; // return number as is if it has only one digit
    }
    if (numDigits % 2 === 1) { // odd number of digits
        for (let i = 1; i < numDigits - 1; i += 2) {
            const temp = digits[i];
            digits[i] = digits[i + 1];
            digits[i + 1] = temp;
        }
    }
    else { // even number of digits
        for (let i = 0; i < numDigits - 1; i += 2) {
            const temp = digits[i];
            digits[i] = digits[i + 1];
            digits[i + 1] = temp;
        }
    }
    const swappedNumber = parseInt(digits.join('')); // join digits and convert back to number
    return isNaN(swappedNumber) ? 0 : swappedNumber; // return 0 for invalid outputs
}

module.exports = swapDigits;
