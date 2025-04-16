const menuButton = document.querySelector('.menu_btn');
const closeButton = document.querySelector('.close_btn');
const navBar = document.querySelector("nav");
const toggleButton = document.querySelector(".tgl_btn");
const scrollTop = document.getElementById("scroll-top");
const modeIcon = document.getElementById("modeIcon");
const reponsive_container = document.querySelector(".reponsive_container");
const wellcome_section_txt = document.querySelector(".wellcome_section");
const myName_section = document.querySelector(".myName_section");


menuButton.addEventListener("click",()=>{
    navBar.style.left = "0px"
});

closeButton.addEventListener("click",()=>{
    navBar.style.left = "-100%"
});

window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    reponsive_container.style.position = "fixed";
  }
  else{
    reponsive_container.style.position = "sticky";
  }
});

// position: sticky;


// Function to apply the saved mode
function applyMode(mode) {
  if (mode === "night") {
    document.body.classList.add("night");
    modeIcon.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else {
    document.body.classList.remove("night");
    modeIcon.innerHTML = "<i class='fa-solid fa-moon'></i>";
  }
}

// Load the mode from localStorage on page load
const savedMode = localStorage.getItem("mode") || "day";
applyMode(savedMode);

// Toggle and save the mode
toggleButton.addEventListener("click", () => {
  const isNight = document.body.classList.toggle("night");
  const newMode = isNight ? "night" : "day";
  localStorage.setItem("mode", newMode);
  modeIcon.innerHTML = isNight ? "<i class='fa-solid fa-sun'></i>" : "<i class='fa-solid fa-moon'></i>";
});








                                      // Scroll Adjustment



document.addEventListener("scroll",()=>{
  if (window.scrollY>50) {
      scrollTop.style.display = "block";
  } else {
      scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click",()=>{
  window.scrollTo({
      top : 0,
      behavior: "smooth"
  });
});


let txt = "Hey ✌";
let txt2 = "It's Ronit"
function type(txt,txtPortion,speed){
  for(let i = 0; i<=txt.length; i++){
    setTimeout(()=>{
      txtPortion.textContent = txt.slice(0,i)
    },i*speed);
  }
}

window.addEventListener("DOMContentLoaded",()=>{
  type(txt,wellcome_section_txt,50)
  type(txt2,myName_section,50)
})


  const texts = ["Devloper </>.", "Designer .", "Student ."];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = texts[textIndex];
    const display = document.getElementById("changing_content");

    if (!isDeleting) {
      display.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1000); // Pause before deleting
        return;
      }
    } else {
      display.textContent = currentText.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
      }
    }

    setTimeout(typeWriter, 100); // Speed
  }

  typeWriter();
