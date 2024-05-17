function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");

  if(menuBth.className === "nav-menu") {
    menuBth.className += " responsive";
  } else {
    menuBth.className = "nav-menu";
  }
}


/*-----dark mode-----*/

const body =document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

  toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
  });


  /*---------Typing Effect ----*/


  var typingEffect = new Typed(".typeText", {
    strings: ["Devloper", "Coder", "Engineer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDely: 2000,
  })


/*-------Scroll Animation------*/

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", {dealy: 100});
sr.reveal(".text-info", {deley:200});
sr.reveal(".text-btn", {deley:200});
sr.reveal(".social_icons", {deley:200});
sr.reveal(".featured-image", {deley:200});


sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance:"80px",
  duration: 2000,
  reset: true,
})

srLeft.reveal(".about-info" ,{delay: 150});
srLeft.reveal(".contact-info" ,{delay: 150});
srLeft.reveal(".education" ,{delay: 150});

const srRight = ScrollReveal({
  origin: "right",
  distance:"80px",
  duration: 2000,
  reset: true,
})

srRight.reveal(".skill" ,{delay: 150});
srRight.reveal(".col" ,{delay: 150});

/*--------active link-------*/

const sections = document.querySelectorAll(".section[id]");
function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach((current) =>{
    const sectionHeight = current.offsetHeight,

      sectionTop = current.offsetTop -50,
      sectionId = current.getAttribute("id");

    if(scrollY . sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu  a[href*=" + sectionId + "]")
      .classList.add("active-link");
    } else {
      document.querySelector(".nav-menu  a[href*=" + sectionId + "]")
      .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);