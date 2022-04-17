toggled = true;

function openMenu() {
 if (toggled) {
   document.querySelector("header .right").style.display = "flex";
   document.querySelector("header #menuIcon").classList.add("open")
 } else {
   document.querySelector("header .right").style.display = "none";
   document.querySelector("header #menuIcon").classList.remove("open")
 }
 toggled = !toggled;
}

let scrollpos = window.scrollY
const header = document.querySelector("header")

const add_class_on_scroll = () => header.classList.add("scroll")
const remove_class_on_scroll = () => header.classList.remove("scroll")


window.addEventListener('scroll', function() {
  scrollpos = window.scrollY

  if (scrollpos > 0) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})
