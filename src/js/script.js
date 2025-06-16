const menuButton = document.querySelector(".menu_btn");
const closeButton = document.querySelector(".close_btn");
const navBar = document.querySelector("nav");
const reponsive_container = document.querySelector(".reponsive_container");
const navBartoggleButton = document.querySelector(".toggle_section");
const toggleButtonResponsive = document.querySelector(
  ".toggle_section_responsive"
);
const modeIcon = document.querySelectorAll(".modeIcon");
const scrollTop = document.getElementById("scroll-top");
const wellcome_section_txt = document.querySelector(".wellcome_section");
const myName_section = document.querySelector(".myName_section");
const navbar = document.querySelector("nav");
const tgl_btn = document.getElementById("tgl_btn");
const link = document.querySelectorAll(".link");
const mediaMatch = window.matchMedia("(max-width: 700px)");

// Right Click Disable

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
document.addEventListener("mousedown", function (event) {
  if (event.button === 2 || event.ctrlKey || event.shiftKey || event.altKey) {
    event.preventDefault();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.shiftKey || event.altKey) {
    event.preventDefault();
  }
});

// Switching Light mode / Dark mode

function applyMode(mode) {
  if (mode === "night") {
    document.body.classList.add("night");
    modeIcon.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else {
    document.body.classList.remove("night");
    modeIcon.innerHTML = "<i class='fa-solid fa-moon'></i>";
  }
}

const savedMode = localStorage.getItem("mode") || "day";
applyMode(savedMode);

modeIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isNight = document.body.classList.toggle("night");
    const newMode = isNight ? "night" : "day";
    localStorage.setItem("mode", newMode);
    btn.innerHTML = isNight
      ? "<i class='fa-solid fa-sun'></i>"
      : "<i class='fa-solid fa-moon'></i>";
  });
});

// Navbar Open and Close

menuButton.addEventListener("click", () => {
  navBar.style.left = "0px";
});

closeButton.addEventListener("click", () => {
  closeButtonAnimate();
});

function closeButtonAnimate() {
  navBar.style.left = "-100%";
}

(function linkClicked() {
  if (mediaMatch.media) {
    link.forEach((link) => {
      link.addEventListener("click", () => {
        closeButtonAnimate();
      });
    });
  }
})();

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    reponsive_container.style.position = "fixed";
  } else {
    reponsive_container.style.position = "sticky";
  }
});

// Scroll Adjustment

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Typing Effect

let txt = "Hey ✌";
let txt2 = "It's Ronit";
function type(txt, txtPortion, speed) {
  for (let i = 0; i <= txt.length; i++) {
    setTimeout(() => {
      txtPortion.textContent = txt.slice(0, i);
    }, i * speed);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  type(txt, wellcome_section_txt, 50);
  type(txt2, myName_section, 50);
});

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
