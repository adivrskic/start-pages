var month = new Array();
month[0] = "01";
month[1] = "02";
month[2] = "03";
month[3] = "04";
month[4] = "05";
month[5] = "06";
month[6] = "07";
month[7] = "08";
month[8] = "09";
month[9] = "10";
month[10] = "11";
month[11] = "12";
var day = new Array();
day[0] = "Sun";
day[1] = "Mon";
day[2] = "Tue";
day[3] = "Wed";
day[4] = "Thu";
day[5] = "Fri";
day[6] = "Sat";

function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}


  var date = new Date();
  var n = month[date.getMonth()];
  var day_of_week = day[date.getDay()];
  var day_of_month = date.getDate();
  var hours = date.getHours();
  var year = date.getFullYear();

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
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = '[' + h + " : " + m + " : " + s + ']';
    t = setTimeout(function() {
      startTime()
    }, 500);
}
startTime();

  document.getElementById("date").innerHTML = '[' + day_of_week  + ' ' + n + '/' + day_of_month + '/' + year + ']';

var browserCode = navigator.appCodeName;
document.getElementById("browserCode").innerHTML =  browserCode;
var browserName = navigator.appName;
document.getElementById("browserName").innerHTML =  browserName;
var platform = navigator.platform;
document.getElementById("platform").innerHTML =  platform;

var main = document.getElementById('main');
var additional = document.getElementById('additional');

var maintab = document.getElementById('maintab');
var additionaltab= document.getElementById('additionaltab');

function toggleMain(){
  if(main.style.display !== 'block'){
    main.style.display = 'block';
    additional.style.display = 'none';
  }
  if(!maintab.classList.contains('active')){
    maintab.classList.add('active');
    additionaltab.classList.remove('active');
  }
}

function toggleAdditional(){
    if(additional.style.display !== 'block'){
      main.style.display = 'none';
      additional.style.display = 'block';
    }
    if(!additionaltab.classList.contains('active')){
      additionaltab.classList.add('active');
      maintab.classList.remove('active');
    }
}
