var today = moment().format('dddd, MMMM Do, YYYY');
$('#currentDay').text(today);

var button7 = $('.button7');
var taskInput7 = $('.task7');

button7.on('click', function() {

    var task7 = taskInput7.val();
    localStorage.setItem('7AM', task7);
})

if (localStorage.getItem('7AM')) {

    var savedTask7 = localStorage.getItem('7AM');
    taskInput7.val(savedTask7);
}

if (moment().format("H") < 7) {

    taskInput7.addClass('future');
    console.log(taskInput7);

} else if (moment().format("H") > 7) {

    taskInput7.addClass('past');
    console.log(taskInput7);

} else {

    taskInput7.addClass('present');
}

var button8 = $('.button8');
var taskInput8 = $('.task8');

button8.on('click', function() {

    var task8 = taskInput8.val();
    localStorage.setItem('8AM', task8);
})

if (localStorage.getItem('8AM')) {

    var savedTask8 = localStorage.getItem('8AM');
    taskInput8.val(savedTask8);
}

if (moment().format("H") < 8) {

    taskInput8.addClass('future');
    console.log(taskInput8);

} else if (moment().format("H") > 8) {

    taskInput8.addClass('past');
    console.log(taskInput8);

} else {

    taskInput8.addClass('present');
}

var button9 = $('.button9');
var taskInput9 = $('.task9');

button9.on('click', function() {

    var task9 = taskInput9.val();
    localStorage.setItem('9AM', task9);
})

if (localStorage.getItem('9AM')) {

    var savedTask9 = localStorage.getItem('9AM');
    taskInput9.val(savedTask9);
}

if (moment().format("H") < 9) {

    taskInput9.addClass('future');

} else if (moment().format("H") > 9) {

    taskInput9.addClass('past');

} else {

    taskInput9.addClass('present');
}

var button10 = $('.button10');
var taskInput10 = $('.task10');

button10.on('click', function() {

    var task10 = taskInput10.val();
    localStorage.setItem('10AM', task10);
    // taskInput10.attr('value', task10);
})

if (localStorage.getItem('10AM')) {

    var savedTask10 = localStorage.getItem('10AM');
    taskInput10.val(savedTask10);
}

if (moment().format("H") < 10) {

    taskInput10.addClass('future');

} else if (moment().format("H") > 10) {

    taskInput10.addClass('past');

} else {

    taskInput10.addClass('present');
}

var button11 = $('.button11');
var taskInput11 = $('.task11');

button11.on('click', function() {

    var task11 = taskInput11.val();
    localStorage.setItem('11AM', task11);
})

if (localStorage.getItem('11AM')) {

    var savedTask11 = localStorage.getItem('11AM');
    taskInput11.val(savedTask11);
}

if (moment().format("H") < 11) {

    taskInput11.addClass('future');

} else if (moment().format("H") > 11) {

    taskInput11.addClass('past');

} else {

    taskInput11.addClass('present');
}

var button12 = $('.button12');
var taskInput12 = $('.task12');

button12.on('click', function() {

    var task12 = taskInput12.value;
    localStorage.setItem('12PM', task12);
})

if (localStorage.getItem('12PM')) {

    var savedTask12 = localStorage.getItem('12PM');
    taskInput12.val(savedTask12);
}

if (moment().format("H") < 12) {

    taskInput12.addClass('future');

} else if (moment().format("H") > 12) {

    taskInput12.addClass('past');

} else {

    taskInput12.addClass('present');
}

var button13 = $('.button13');
var taskInput13 = $('.task13');

button13.on('click', function() {

    var task13 = taskInput13.value;
    localStorage.setItem('1PM', task13);
})

if (localStorage.getItem('1PM')) {

    var savedTask13 = localStorage.getItem('1PM');
    taskInput13.val(savedTask13);
}

if (moment().format("H") < 13) {

    taskInput13.addClass('future');

} else if (moment().format("H") > 13) {

    taskInput13.addClass('past');

} else {

    taskInput13.addClass('present');
}

var button14 = $('.button14');
var taskInput14 = $('.task14');

button14.on('click', function() {

    var task14 = taskInput14.value;
    localStorage.setItem('2PM', task14);
})

if (localStorage.getItem('2PM')) {

    var savedTask14 = localStorage.getItem('2PM');
    taskInput14.val(savedTask14);
}

if (moment().format("H") < 14) {

    taskInput14.addClass('future');

} else if (moment().format("H") > 14) {

    taskInput14.addClass('past');

} else {

    taskInput14.addClass('present');
}

var button15 = $('.button15');
var taskInput15 = $('.task15');

button15.on('click', function() {

    var task15 = taskInput15.value;
    localStorage.setItem('3PM', task15);
})

if (localStorage.getItem('3PM')) {

    var savedTask15 = localStorage.getItem('3PM');
    taskInput15.val(savedTask15);
}

if (moment().format("H") < 15) {

    taskInput15.addClass('future');

} else if (moment().format("H") > 15) {

    taskInput15.addClass('past');

} else {

    taskInput15.addClass('present');
}

var button16 = $('.button16');
var taskInput16 = $('.task16');

button16.on('click', function() {

    var task16 = taskInput16.value;
    localStorage.setItem('4PM', task16);
})

if (localStorage.getItem('4PM')) {

    var savedTask16 = localStorage.getItem('4PM');
    taskInput16.val(savedTask16);
}

if (moment().format("H") < 16) {

    taskInput16.addClass('future');

} else if (moment().format("H") > 16) {

    taskInput16.addClass('past');

} else {

    taskInput16.addClass('present');
}

var button17 = $('.button17');
var taskInput17 = $('.task17');

button17.on('click', function() {

    var task17 = taskInput17.value;
    localStorage.setItem('5PM', task17);
})

if (localStorage.getItem('5PM')) {

    var savedTask17 = localStorage.getItem('5PM');
    taskInput17.val(savedTask17);
}

if (moment().format("H") < 17) {

    taskInput17.addClass('future');

} else if (moment().format("H") > 17) {

    taskInput17.addClass('past');

} else {

    taskInput17.addClass('present');
}

var button18 = $('.button18');
var taskInput18 = $('.task18');

button18.on('click', function() {

    var task18 = taskInput18.value;
    localStorage.setItem('6PM', task18);
})

if (localStorage.getItem('6PM')) {

    var savedTask18 = localStorage.getItem('6PM');
    taskInput18.val(savedTask18);
}

if (moment().format("H") < 18) {

    taskInput18.addClass('future');

} else if (moment().format("H") > 18) {

    taskInput18.addClass('past');

} else {

    taskInput18.addClass('present');
}

var button19 = $('.button19');
var taskInput19 = $('.task19');

button19.on('click', function() {

    var task19 = taskInput19.value;
    localStorage.setItem('7PM', task19);
})

if (localStorage.getItem('7PM')) {

    var savedTask19 = localStorage.getItem('7PM');
    taskInput19.val(savedTask19);
}

if (moment().format("H") < 19) {

    taskInput19.addClass('future');

} else if (moment().format("H") > 19) {

    taskInput19.addClass('past');

} else {

    taskInput19.addClass('present');
}