const input = document.querySelector("#phone");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");


const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
const iti = window.intlTelInput(input, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

const reset = () => {
  input.classList.remove("error");
  errorMsg.innerHTML = " ";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', () => {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      const errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
input.addEventListener('change',reset);
input.addEventListener('keyup',reset);


let menuIcon = document.querySelector('#menu-icon');
menuIcon.onclick = () =>{
  navMenu.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
  
}

var navMenu=document.querySelector(".header-content");
var hamburger=document.querySelector(".hamburger");
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))