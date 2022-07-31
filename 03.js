//3. Using the constructor function create, an object and methods to support the following functionality 

function Calculator(initialValue) {
    this.result = initialValue;
    this.plus = function (val) {
        this.result += val;
    }
    this.minus = function (val) {
        this.result -= val;
    }
    this.multiply = function (val) {
        this.result *= val;
    }
    this.divide = function (val) {
        if (val === 0) {
            throw "can't be divided to zero"
        }
        this.result /= val;
    }
    this.getResult = function () {
        return this.result;
    }

}

const calculator = new Calculator(0); // Initial result is 0 
calculator.plus(5); // add 5 to the result 
calculator.minus(3); // subtract 3 from result 
calculator.multiply(3); // multiply result by 3
calculator.divide(2); // divide result on 2
console.log(calculator.getResult()) // Returns the result