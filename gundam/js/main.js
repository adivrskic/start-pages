var link1 = document.getElementById('links_1');
var link2 = document.getElementById('links_2');
var link3 = document.getElementById('links_3');
var link4 = document.getElementById('links_4');

function highlight(id){
  if(link1){
    id.style.transition = "all .7s";
    id.style.backgroundColor = "rgba(25,50,200,.3)";
  }
}

function removeHighlight(id){
  if(link1){
    id.style.transition = "all .7s";
    id.style.backgroundColor = "rgba(0,0,0,.1)";
  }
}
