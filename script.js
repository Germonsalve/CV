const hamburger = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("nav_links")[0];
const dropDownButton1 = document.getElementById("skill1");
const dropDownButton2 = document.getElementById("skill2");
const dropDownButton3 = document.getElementById("skill3");
const dropDownBox1 = document.getElementsByClassName("dropdown_box")[0];
const dropDownBox2 = document.getElementsByClassName("dropdown_box")[1];
const dropDownBox3 = document.getElementsByClassName("dropdown_box")[2];


console.log(form);
console.log(name);
console.log(email);
console.log(message)

hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle("active");
});
navbarLinks.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
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

function sendMsg(e) {
    e.preventDefault();
    const form = document.getElementsByTagName('form')[0];
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    Email.send({
        SecureToken: "6b35400b-543c-4820-b4b8-ac691adbb122",
        To: 'germonsalve@icloud.com',
        From: email.value,
        Subject: "Contact Form",
        Body: message.value
    }).then(
        message => alert(message)
    );
}

form.addEventListener('submit', sendMsg);