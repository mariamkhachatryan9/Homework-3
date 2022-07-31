// 1. Create an object and methods to support the following functionality 

const obj = {};

obj.getName = function () {
    return this.name;
}
obj.setName = function (name) {
    this.name = name;
}


// obj.setName("John");
console.log(obj.getName()); // Should log ‘John’