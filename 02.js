//2. Create an object and methods to support the following functionality 

const obj = {};

obj.setSum = function (sum) {
    this.sum = sum;
}
obj.getSum = function () {
    return this.sum;
}
obj.add = function (number) {
    this.sum += number;
}


obj.setSum(10);
obj.add(20);
console.log(obj.getSum()); // Should log 30, 10 + 20 = 30
obj.setSum(100);
console.log(obj.getSum()); // Should log 100,  the sum was set to 100