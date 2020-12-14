// declare all the shapes here by Id
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

window.addEventListener("scroll", function(event) {
  let top = this.scrollY;
  let h = window.innerHeight;
  console.log(top);

  if(top > 450) {
    box1.classList.add("scale-animation");
  } else {
    box1.classList.remove("scale-animation");
  }

  if(top > 1000) {
    box2.classList.add('rotate-animation');
  } else {
    box2.classList.remove('rotate-animation');
  }

  if (top < 3000) {
    box3.style.backgroundColor = '#ff0000';
  } else if (top > 3000 && top <= 3000 + h) {
    box3.style.backgroundColor = '#00ff00';
  } else if (top > 3000 + h && top < 3000 + h*2) {
    box3.style.backgroundColor = '#0000ff';
  } else if (top > 3000 + h*2 && top < 3000 + h*4) {
    box3.style.backgroundColor = '#1d1d1f';
  }

  if (top > 5300) {
    box4.classList.add('shrink-animation');
  }
  if (top > 6200) {
    box5.classList.add('rotate3d-animation');    
  } else {
    box5.classList.remove('rotate3d-animation');    
  }

}, false);
