let projectTitle = document.getElementById('projectTitle');
let projectLink = document.getElementById('projectLink');
let title = document.getElementById('title');
let contactLink = document.getElementById('contactLink');
let contact = document.getElementById('contact');
let menu = document.getElementById('menu');
let container = document.getElementById('container');
let formInputs = document.querySelectorAll('.formInput');
let labels = document.querySelectorAll('label');

//////////////////////////////
// Scrolling animations

projectLink.onclick = function() {
  scrollto(projectTitle.offsetTop-90);
};
contactLink.onclick = function() {
  scrollto(contactTitle.offsetTop-90);
};
title.onclick = function() {
  scrollto(title.offsetTop);
};

let scrollto = function(element) {
  window.scrollTo({ top: element, behavior: 'smooth' })
};


//////////////////////////////
// Developer Desginer animations

let string1 = "development & "
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
  document.getElementById("designerdiv").style.left = "119px";
}
var myFunc3 = function() {
  document.getElementById("designerdiv").classList.add('divanimate3')
  document.getElementById("designerdiv").classList.add('divanimate2')
  document.getElementById("designer").style.color = "#FA7921";
}

setTimeout(myFunc1, 2200);
setTimeout(myFunc2, 3500);
setTimeout(myFunc3, 3550);


//////////////////////////////
// Input field animations

var labelFunc = function (id, action) {
  labels.forEach(function(elem) {
    if (elem.htmlFor == id && action == "add") {
      elem.classList.add('labelFocus');
    } else if (elem.htmlFor == id && action == "remove") {
      elem.classList.remove('labelFocus');
    }
  }) 
}


formInputs.forEach(function(elem) {
  elem.onfocus = function() {
    labelFunc(elem.id, "add")
  }
  elem.onblur = function() {
    if (!elem.value) {
      labelFunc(elem.id, "remove")
    }
  }
})





