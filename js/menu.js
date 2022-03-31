toggled = true;

function openMenu() {
 if (toggled) {
   document.querySelector("header .right").style.display = "flex";
   document.querySelector("header #menuIcon").classList.add("open")
   toggled = !toggled;
 } else {
   document.querySelector(".right").style.display = "none";
   document.querySelector("header #menuIcon").classList.remove("open")
   toggled = !toggled;
 }
}
