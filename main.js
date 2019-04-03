let projectTitle = document.getElementById('projectTitle');
let projectLink = document.getElementById('projectLink');
let menu = document.getElementById('menu');
let container = document.getElementById('container');

projectTitle.onclick = function() {
  scrollto(projectTitle.offsetTop-20);
};
projectLink.onclick = function() {
  scrollto(projectTitle.offsetTop-20);
  // container.classList.toggle("left")
  // document.body.classList.toggle("fixed");
};

let scrollto = function(element) {
  window.scrollTo({ top: element, behavior: 'smooth' })
};

// menu.onclick = function() {
//   container.classList.toggle("left")
//   document.body.classList.toggle("fixed");
// }

let string1 = "developer/ "
let array1 = string1.split("");
let timer;

var textType = function() {
  if (array1.length > 0) {
    document.getElementById('developer').innerHTML += array1.shift();
  } else {
    clearTimeout(timer);
  }
  loop = setTimeout(textType, 100);
}

setTimeout(textType, 800);

var myFunc1 = function() {
  document.getElementById("designerdiv").classList.add('divanimate3')
  document.getElementById("designerdiv").classList.add('divanimate1')
}
var myFunc2 = function() {
  document.getElementById("designerdiv").classList.remove('divanimate3')
  document.getElementById("designerdiv").style.transformOrigin = "right";
  document.getElementById("designerdiv").style.left = "159px";
}
var myFunc3 = function() {
  document.getElementById("designerdiv").classList.add('divanimate3')
  document.getElementById("designerdiv").classList.add('divanimate2')
  document.getElementById("designer").style.color = "#FA7921";
}

setTimeout(myFunc1, 2200);
setTimeout(myFunc2, 3500);
setTimeout(myFunc3, 3550);