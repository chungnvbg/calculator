const minus     = require('./minus');
const division  = require('./division');
const multiply  = require('./multiply');
const Add       = require('./Add');

class Calculator {
    calculate(operator , numberOne , numberTwo ) {
        return operator.operate(numberOne , numberTwo);
    }
}

let calculator = new Calculator();

console.log(calculator.calculate(new minus() , process.argv[2] , process.argv[3]));
console.log(calculator.calculate(new multiply() , process.argv[2] , process.argv[3] ));
console.log(calculator.calculate(new Add() , parseInt(process.argv[2]) , parseInt(process.argv[3]));
try {
    console.log(calculator.calculate(new division() , process.argv[2] , process.argv[3]));
} catch (error) {
    console.log(error);
}
;