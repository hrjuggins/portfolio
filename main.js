let projectTitle = document.getElementById('projectTitle');
let projectLink = document.getElementById('projectLink');
let title = document.getElementById('title');
let contactLink = document.getElementById('contactLink');
let contact = document.getElementById('contact');
let menu = document.getElementById('menu');
let container = document.getElementById('container');


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

// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
//   let projects = document.getElementsByClassName('project')
//   if (window.outerWidth <= 800) {
//     if (this.oldScroll > this.scrollY) {
//     } else {
//       for ( i = 0; i < projects.length; i++ ) {
//         if( this.scrollY < projects[i].offsetTop + projects[i].offsetHeight ) {
//           console.log(`window has passed project ${i}`);
//           scrollto(projects[i+1].offsetTop-70)
//         }
//       }
//     }
//   }
//   this.oldScroll = this.scrollY;
// }

// window.onscroll = function() {
//   let oldScroll = this.scrollY
//   let windowPos = this.scrollY
//   let projects = document.getElementsByClassName('project')
//     for ( i = 0; i < projects.length; i++ ) {
//       // console.log(projects[i].offsetTop)
//       if( windowPos > projects[i].offsetTop && windowPos < projects[i].offsetTop + 200) {
//         console.log(`window has passed project ${i}`);
//         scrollto(projects[i+1].offsetTop)
//       }
//     }
  
// }

// menu.onclick = function() {
//   container.classList.toggle("left")
//   document.body.classList.toggle("fixed");
// }


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
