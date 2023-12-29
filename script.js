const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const SignUplink = document.querySelector(".SignUp-link");
 const btnPopup= document.querySelector(".btnLogin-popup");
 onst iconClose= document.querySelector(".btnLogin-popup");


SignUplink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
  });
 
  iconClose.addEventListener.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });
 

