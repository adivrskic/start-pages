console.log("%c Welcome to the BIOS.", "color:yellow; background-color:blue");

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const nth = (n) => {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
};

const date = new Date();
const n = months[date.getMonth()];
const dayOfWeek = days[date.getDay()];
const dayOfMonth = date.getDate();
const hours = date.getHours();
const year = date.getFullYear();

const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const startTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
    "[" + h + " : " + m + " : " + s + "]";
  t = setTimeout(function () {
    startTime();
  }, 500);
};
startTime();

document.getElementById("date").innerHTML =
  "[" + dayOfWeek + " " + n + "/" + dayOfMonth + "/" + year + "]";

const browserCode = navigator.appCodeName;
document.getElementById("browserCode").innerHTML = browserCode;

const browserName = navigator.appName;
document.getElementById("browserName").innerHTML = browserName;

const platform = navigator.platform;
document.getElementById("platform").innerHTML = platform;

const toggleTab = (index, id) => {
  const tabs = document.querySelectorAll(".header__tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  tabs[index].classList.add("active");

  const content = document.querySelectorAll(".main-content");
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }
  const activeContent = document.getElementById(id);
  activeContent.classList.add("active");
};
