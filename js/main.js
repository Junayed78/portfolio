//mobile menu script
const mobile_menu = document.querySelector(".mobile_menu");
mobile_menu.addEventListener("click", ( ) => {
     document.querySelector(".main_menu").classList.toggle("open");
   });

//light and derk mude script
const derkTheme = document.querySelector(".derk_theme");
derkTheme.addEventListener("click", () => {
  derkTheme.querySelector("i").classList.toggle("fa-sun");
  derkTheme.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("derk");
});

// window.addEventListener("load", () => {
//   if (document.body.classList.contains("derk")) {
//     derkTheme.querySelector("i").classList.add("fa-moon");
//     } else {
//     dekkTheme.querySelector("i").classList.add("fa-sun");
//     }
  
// });