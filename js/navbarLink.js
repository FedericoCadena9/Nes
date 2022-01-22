// Link Navbar activo
const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  if (navLink[i].href === location.href) {
    navLink[i].classList.add("text-primary-500");
    navLink[i].classList.add("bg-gray-50");
    navLink[i].classList.add("md:bg-white");
  }
}