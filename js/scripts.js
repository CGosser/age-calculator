function timeSince(dateInput){
var currentDate = new Date();
var currentYear = parseInt(currentDate.getUTCFullYear());
var currentMonth = parseInt(currentDate.getUTCMonth())+1;
var currentDay = parseInt(currentDate.getUTCDate());
console.log(currentMonth);
var inputYear = parseInt(dateInput.slice(0, 4));
var inputMonth = parseInt(dateInput.slice(5, 7));
var inputDay = parseInt(dateInput.slice(8, 10));
console.log("date entered is " + inputDay + ", " + inputMonth + ", " + inputYear);

var formula1 = 365*inputYear + inputYear/4 - inputYear/100 + inputYear/400 + inputDay + (153*inputMonth+8)/5;
var formula2 = 365*currentYear + currentYear/4 - currentYear/100 + currentYear/400 + currentDay + (153*currentMonth+8)/5;
var total = (formula2) - (formula1);
console.log(formula1)
console.log(formula2)
console.log(total)

var extraFor1= 365*currentYear + currentYear/4 - currentYear/100 + currentYear/400 + currentDay + (153 * currentMonth + 8) /5 ;
console.log(extraFor1)
var add = extraFor1 - formula1
console.log(add)
}
function dateEntered() {

}
// var month = date.getUTC

$(document).ready(function() {
  $("#click").click(function() {
var dob = $("#date").val();
// dob is YYYY-MM-DD
console.log(typeof(dob));
timeSince(dob)
});
});
