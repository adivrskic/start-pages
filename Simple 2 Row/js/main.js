var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var date = new Date();
var n = month[date.getMonth()];
var day_of_week = day[date.getDay()];
var day_of_month = date.getDate();
var hours = date.getHours();

function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

document.getElementById("date").innerHTML = day_of_week + ', ' + day_of_month + nth(day_of_month) + ' of ' + n;
