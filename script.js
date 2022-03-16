const hamburger = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("nav_links")[0];
const dropDownButton1 = document.getElementById("skill1");
const dropDownButton2 = document.getElementById("skill2");
const dropDownButton3 = document.getElementById("skill3");
const dropDownBox1 = document.getElementsByClassName("dropdown_box")[0];
const dropDownBox2 = document.getElementsByClassName("dropdown_box")[1];
const dropDownBox3 = document.getElementsByClassName("dropdown_box")[2];
const form = document.getElementsByTagName('form')[0];
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const arrow1 = document.getElementsByClassName("fa-sort-down")[0];
const arrow2 = document.getElementsByClassName("fa-sort-down")[1];
const arrow3 = document.getElementsByClassName("fa-sort-down")[2];
const btnSwitch = document.getElementById("switch");

console.log(document.getElementById("button_home"));
console.log(document.getElementById("button_contact"));
console.log(arrow3);

//*************************DROPDOWN MENUS AND CARDS **************************/
hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle("active");
});
navbarLinks.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');

});

dropDownButton1.addEventListener('click', function() {
    dropDownBox1.classList.toggle("active");
    arrow1.classList.toggle('active');
});
dropDownButton2.addEventListener('click', function() {
    dropDownBox2.classList.toggle("active");
    arrow2.classList.toggle('active');
});
dropDownButton3.addEventListener('click', function() {
    dropDownBox3.classList.toggle("active");
    arrow3.classList.toggle('active');
});

//********************DARK BUTTON CLASS ADDER ********************/

btnSwitch.addEventListener("click", function() {
    btnSwitch.classList.toggle('active');
    document.body.classList.toggle('dark');
    document.getElementById("navbar").classList.toggle("dark_nav");
    document.getElementsByClassName("side_button")[0].classList.toggle("dark_nav");
    document.getElementsByClassName("side_button")[1].classList.toggle("dark_nav");
    document.getElementById("button_home").classList.toggle("dark_nav");
    document.getElementById("button_contact").classList.toggle("dark_nav");
    document.getElementsByClassName("contact_cards")[0].classList.toggle("dark_nav");
    document.getElementsByClassName("contact_cards")[1].classList.toggle("dark_nav");
    document.getElementsByClassName("contact_cards")[2].classList.toggle("dark_nav");
    document.getElementById("footer").classList.toggle("dark_nav");
    document.getElementsByClassName("nav_links")[0].classList.toggle("dark_nav");
    dropDownBox1.classList.toggle("dark_nav");
    dropDownBox2.classList.toggle("dark_nav");
    dropDownBox3.classList.toggle("dark_nav");
});

//*************************EMAIL FUNCTION******************/

function sendMsg(e) {
    e.preventDefault();
    Email.send({
        SecureToken: "6b35400b-543c-4820-b4b8-ac691adbb122",
        To: 'germonsalve@icloud.com',
        From: email.value,
        Subject: "Contact Form from Page",
        Body: "Sent by : " + name.value + "<br><br> Message: " + message.value
    }).then(
        message => alert("Message Sent Succesfully")

    );
    form.reset();
}

form.addEventListener('submit', sendMsg);

/***********************EASY SCROLLDOWN *****************/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});