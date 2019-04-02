let projectTitle = document.getElementById('projectTitle');
let menu = document.getElementById('menu');
let container = document.getElementById('container');

projectTitle.onclick = function() {
  scrollto(projectTitle.offsetTop-20);
};

let scrollto = function(element) {
  window.scrollTo({ top: element, behavior: 'smooth' })
};

menu.onclick = function() {
  container.classList.toggle("left")
  document.body.classList.toggle("fixed");
}
