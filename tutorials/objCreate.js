var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yob);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yob = 1992;