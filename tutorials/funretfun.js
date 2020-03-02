// function returning function

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name){
            console.log(name + ' Can you please exlain what UX design is');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else{
        return function(name) {
            console.log('Hello' + name + 'What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Utsav');
designerQuestion('Joey');






console.log('FUNCTION RETURNING FUNCTION ENDS HERE')