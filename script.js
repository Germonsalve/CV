const hamburger = document.getElementsByClassName("hamburger")[0]
const navbarLinks = document.getElementsByClassName("nav_links")[0]

console.log(navbarLinks);
console.log(hamburger);

hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle("active");
});