var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yob);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yob = 1992;

// objcets
var obj1 = {
    name: 'jhon',
    age: 28
}

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);



// Function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a,b) {
    a =30;
    b.city= 'Sanfrancisco';
}

change(age,obj);
console.log(age);
console.log(obj.city);
console.log('Create OBJECT ENDS HERE')