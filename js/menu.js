toggled = true;

function openMenu() {
 if (toggled) {
   document.querySelector(".right").style.display = "flex";
   toggled = !toggled;
 } else {
   document.querySelector(".right").style.display = "none";
   toggled = !toggled;
 }
}
