var today = moment().format('dddd, MMMM Do, YYYY');
$('#currentDay').text(today);

var button7 = document.querySelector('.button7');
var taskInput7 = document.querySelector('.task7');

button7.addEventListener('click', function() {

    var task7 = taskInput7.value;
    localStorage.setItem('7AM', task7);
    taskInput7.setAttribute('value', task7);
})

if (localStorage.getItem('7AM')) {

    var savedTask7 = localStorage.getItem('7AM');
    taskInput7.setAttribute('placeholder', savedTask7);
}

var button8 = document.querySelector('.button8');
var taskInput8 = document.querySelector('.task8');

button8.addEventListener('click', function() {

    var task8 = taskInput8.value;
    localStorage.setItem('8AM', task8);
    taskInput8.setAttribute('value', task8);
})

if (localStorage.getItem('8AM')) {

    var savedTask8 = localStorage.getItem('8AM');
    taskInput8.setAttribute('placeholder', savedTask8);
}

var button9 = document.querySelector('.button9');
var taskInput9 = document.querySelector('.task9');

button9.addEventListener('click', function() {

    var task9 = taskInput9.value;
    localStorage.setItem('9AM', task9);
    taskInput9.setAttribute('value', task9);
})

if (localStorage.getItem('9AM')) {

    var savedTask9 = localStorage.getItem('9AM');
    taskInput9.setAttribute('placeholder', savedTask9);
}

var button10 = document.querySelector('.button10');
var taskInput10 = document.querySelector('.task10');

button10.addEventListener('click', function() {

    var task10 = taskInput10.value;
    localStorage.setItem('10AM', task10);
    taskInput10.setAttribute('value', task10);
})

if (localStorage.getItem('10AM')) {

    var savedTask10 = localStorage.getItem('10AM');
    taskInput10.setAttribute('placeholder', savedTask10);
}

var button11 = document.querySelector('.button11');
var taskInput11 = document.querySelector('.task11');

button11.addEventListener('click', function() {

    var task11 = taskInput11.value;
    localStorage.setItem('11AM', task11);
    taskInput11.setAttribute('value', task11);
})

if (localStorage.getItem('11AM')) {

    var savedTask11 = localStorage.getItem('11AM');
    taskInput11.setAttribute('placeholder', savedTask11);
}

var button12 = document.querySelector('.button12');
var taskInput12 = document.querySelector('.task12');

button12.addEventListener('click', function() {

    var task12 = taskInput12.value;
    localStorage.setItem('12PM', task12);
    taskInput12.setAttribute('value', task12);
})

if (localStorage.getItem('12PM')) {

    var savedTask12 = localStorage.getItem('12PM');
    taskInput12.setAttribute('placeholder', savedTask12);
}

var button13 = document.querySelector('.button13');
var taskInput13 = document.querySelector('.task13');

button13.addEventListener('click', function() {

    var task13 = taskInput13.value;
    localStorage.setItem('1PM', task13);
    taskInput13.setAttribute('value', task13);
})

if (localStorage.getItem('1PM')) {

    var savedTask13 = localStorage.getItem('1PM');
    taskInput13.setAttribute('placeholder', savedTask13);
}

var button14 = document.querySelector('.button14');
var taskInput14 = document.querySelector('.task14');

button14.addEventListener('click', function() {

    var task14 = taskInput14.value;
    localStorage.setItem('2PM', task14);
    taskInput14.setAttribute('value', task14);
})

if (localStorage.getItem('2PM')) {

    var savedTask14 = localStorage.getItem('2PM');
    taskInput14.setAttribute('placeholder', savedTask14);
}

var button15 = document.querySelector('.button15');
var taskInput15 = document.querySelector('.task15');

button15.addEventListener('click', function() {

    var task15 = taskInput15.value;
    localStorage.setItem('3PM', task15);
    taskInput15.setAttribute('value', task15);
})

if (localStorage.getItem('3PM')) {

    var savedTask15 = localStorage.getItem('3PM');
    taskInput15.setAttribute('placeholder', savedTask15);
}

var button16 = document.querySelector('.button16');
var taskInput16 = document.querySelector('.task16');

button16.addEventListener('click', function() {

    var task16 = taskInput16.value;
    localStorage.setItem('4PM', task16);
    taskInput16.setAttribute('value', task16);
})

if (localStorage.getItem('4PM')) {

    var savedTask16 = localStorage.getItem('4PM');
    taskInput16.setAttribute('placeholder', savedTask16);
}

var button17 = document.querySelector('.button17');
var taskInput17 = document.querySelector('.task17');

button17.addEventListener('click', function() {

    var task17 = taskInput17.value;
    localStorage.setItem('5PM', task17);
    taskInput17.setAttribute('value', task17);
})

if (localStorage.getItem('5PM')) {

    var savedTask17 = localStorage.getItem('5PM');
    taskInput17.setAttribute('placeholder', savedTask17);
}

var button18 = document.querySelector('.button18');
var taskInput18 = document.querySelector('.task18');

button18.addEventListener('click', function() {

    var task18 = taskInput18.value;
    localStorage.setItem('6PM', task18);
    taskInput18.setAttribute('value', task18);
})

if (localStorage.getItem('6PM')) {

    var savedTask18 = localStorage.getItem('6PM');
    taskInput18.setAttribute('placeholder', savedTask18);
}

var button19 = document.querySelector('.button19');
var taskInput19 = document.querySelector('.task19');

button19.addEventListener('click', function() {

    var task19 = taskInput19.value;
    localStorage.setItem('7PM', task19);
    taskInput19.setAttribute('value', task19);
})

if (localStorage.getItem('7PM')) {

    var savedTask19 = localStorage.getItem('7PM');
    taskInput19.setAttribute('placeholder', savedTask19);
}