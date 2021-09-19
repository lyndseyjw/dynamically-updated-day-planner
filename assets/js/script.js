// creating a variable that saves the current date in specified format & displays on screen
var today = moment().format('dddd, MMMM Do, YYYY');
$('#currentDay').text(today);

// variables for 7AM button & task input
var button7 = $('.button7');
var taskInput7 = $('.task7');

// when user clicks the 7AM button, text input set to local storage
button7.on('click', function() {

    var task7 = taskInput7.val();
    localStorage.setItem('7AM', task7);
})

// if there is a 7AM task saved in local storage, display to screen
if (localStorage.getItem('7AM')) {

    var savedTask7 = localStorage.getItem('7AM');
    taskInput7.val(savedTask7);
}

// conditional statement that changes the calendar 
if (moment().format("H") < 7) {

    taskInput7.addClass('future');
    console.log(taskInput7);

} else if (moment().format("H") > 7) {

    taskInput7.addClass('past');
    console.log(taskInput7);

} else {

    taskInput7.addClass('present');
}

// variables for 8AM button & task input
var button8 = $('.button8');
var taskInput8 = $('.task8');

// when user clicks the 8AM button, text input set to local storage
button8.on('click', function() {

    var task8 = taskInput8.val();
    localStorage.setItem('8AM', task8);
})

// if there is a 8AM task saved in local storage, display to screen
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

// variables for 9AM button & task input
var button9 = $('.button9');
var taskInput9 = $('.task9');

// when user clicks the 9AM button, text input set to local storage
button9.on('click', function() {

    var task9 = taskInput9.val();
    localStorage.setItem('9AM', task9);
})

// if there is a 9AM task saved in local storage, display to screen
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

// variables for 10AM button & task input
var button10 = $('.button10');
var taskInput10 = $('.task10');

// when user clicks the 10AM button, text input set to local storage
button10.on('click', function() {

    var task10 = taskInput10.val();
    localStorage.setItem('10AM', task10);
    // taskInput10.attr('value', task10);
})

// if there is a 10AM task saved in local storage, display to screen
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

// variables for 11AM button & task input
var button11 = $('.button11');
var taskInput11 = $('.task11');

// when user clicks the 11AM button, text input set to local storage
button11.on('click', function() {

    var task11 = taskInput11.val();
    localStorage.setItem('11AM', task11);
})

// if there is a 11AM task saved in local storage, display to screen
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

// variables for 12PM button & task input
var button12 = $('.button12');
var taskInput12 = $('.task12');

// when user clicks the 12PM button, text input set to local storage
button12.on('click', function() {

    var task12 = taskInput12.value;
    localStorage.setItem('12PM', task12);
})

// if there is a 12PM task saved in local storage, display to screen
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

// variables for 1PM button & task input
var button13 = $('.button13');
var taskInput13 = $('.task13');

// when user clicks the 1PM button, text input set to local storage
button13.on('click', function() {

    var task13 = taskInput13.value;
    localStorage.setItem('1PM', task13);
})

// if there is a 1PM task saved in local storage, display to screen
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

// variables for 2PM button & task input
var button14 = $('.button14');
var taskInput14 = $('.task14');

// when user clicks the 2PM button, text input set to local storage
button14.on('click', function() {

    var task14 = taskInput14.value;
    localStorage.setItem('2PM', task14);
})

// if there is a 2PM task saved in local storage, display to screen
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

// variables for 3PM button & task input
var button15 = $('.button15');
var taskInput15 = $('.task15');

// when user clicks the 3PM button, text input set to local storage
button15.on('click', function() {

    var task15 = taskInput15.value;
    localStorage.setItem('3PM', task15);
})

// if there is a 3PM task saved in local storage, display to screen
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

// variables for 4PM button & task input
var button16 = $('.button16');
var taskInput16 = $('.task16');

// when user clicks the 4PM button, text input set to local storage
button16.on('click', function() {

    var task16 = taskInput16.value;
    localStorage.setItem('4PM', task16);
})

// if there is a 4PM task saved in local storage, display to screen
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

// variables for 5PM button & task input
var button17 = $('.button17');
var taskInput17 = $('.task17');

// when user clicks the 5PM button, text input set to local storage
button17.on('click', function() {

    var task17 = taskInput17.value;
    localStorage.setItem('5PM', task17);
})

// if there is a 5PM task saved in local storage, display to screen
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

// variables for 6PM button & task input
var button18 = $('.button18');
var taskInput18 = $('.task18');

// when user clicks the 6PM button, text input set to local storage
button18.on('click', function() {

    var task18 = taskInput18.value;
    localStorage.setItem('6PM', task18);
})

// if there is a 6PM task saved in local storage, display to screen
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

// variables for 7PM button & task input
var button19 = $('.button19');
var taskInput19 = $('.task19');

// when user clicks the 7PM button, text input set to local storage
button19.on('click', function() {

    var task19 = taskInput19.value;
    localStorage.setItem('7PM', task19);
})

// if there is a 7PM task saved in local storage, display to screen
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