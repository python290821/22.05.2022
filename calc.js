
const calc = {};

calc.add = (num1, num2) => {
    return num1 + num2;
}

calc.multiply = (num1, num2) => {
    return num1 * num2;
}

// min
calc.min = (num1, num2) => {
    return num1 - num2;
}

// div
calc.div = (num1, num2) => {
    if (num2 === 0) {
        throw 'Cannot divide by zero!'
    }
    return num1 / num2;
}

module.exports = calc;


