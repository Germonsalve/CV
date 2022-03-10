const hamburger = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("nav_links")[0];
const dropDownButton1 = document.getElementById("skill1");
const dropDownButton2 = document.getElementById("skill2");
const dropDownButton3 = document.getElementById("skill3");
const dropDownBox1 = document.getElementsByClassName("dropdown_box")[0];
const dropDownBox2 = document.getElementsByClassName("dropdown_box")[1];
const dropDownBox3 = document.getElementsByClassName("dropdown_box")[2];


console.log(dropDownBox1);
console.log(dropDownBox2);

hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle("active");
});

dropDownButton1.addEventListener('click', function() {
    dropDownBox1.classList.toggle("active");
});
dropDownButton2.addEventListener('click', function() {
    dropDownBox2.classList.toggle("active");
});
dropDownButton3.addEventListener('click', function() {
    dropDownBox3.classList.toggle("active");
});