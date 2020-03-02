/**
 * OBJECT FUNCTION CONSTRUCTOR
 */
// var john = {
//     name: 'john',
//     yob: '1980',
//     job: 'teacher'
// }

var person = function (name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

person.prototype.calculateAge = function () {
    return (2020 - this.yob);
}

var john = new person('john', 1980, 'Teacher');

console.log(john);
console.log(john.calculateAge());
console.log('OBJECT FUNCTION CONSTRUCTOR ENDS HERE')