'use strict'

window.addEventListener('load', () => {
  const navbar = document.getElementById('navbar');
  let visible = false;

  document.getElementById('menu').addEventListener('click', () => {
    if (visible) {
      navbar.style.left = '-14vw';
      visible = false;
    } else {
      navbar.style.left = '0vw';
      visible = true;
    }

    // $( document ).ready(function() {
    //  Email.send({
    //   Host : "smtp.yourisp.com",
    //   Username : "username",
    //   Password : "password",
    //   To : 'klausnerflorian03@gmail.com',
    //   From : "you@isp.com",
    //   Subject : "This is the subject",
    //   Body : "And this is the body"}).then( message => alert(message));
    // });
  });

document.getElementById('button').addEventListener('click', () => {
  let firstname = document.getElementById('firstname');
  let lastname = document.getElementById('lastname');
  let email = document.getElementById('mail');
  let textarea = document.getElementById('textfield');
  let userFeedBack = document.getElementById('userfdb');

  firstname.style.borderBottom = "0.0625rem solid #999";
  lastname.style.borderBottom = "0.0625rem solid #999";
  email.style.borderBottom = "0.0625rem solid #999";
  textarea.style.borderBottom = "0.0625rem solid #999";
  userfdb.textContent = "\u00A0";

  if (firstname.value === "") {
    firstname.style.borderBottom = "0.0625rem solid red"
    userfdb.textContent = "Firstname can't be empty"
  } else if (lastname.value === "") {
    lastname.style.borderBottom = "0.0625rem solid red"
    userfdb.textContent = "Lastname can't be empty"
  } else if (email.value === "") {
    email.style.borderBottom = "0.0625rem solid red"
    userfdb.textContent = "Email can't be empty"
  } else if (email.value !== "") {
    if (!validateEmail(email)) {
      email.style.borderBottom = "0.0625rem solid red"
      userfdb.textContent = "Invalid Email"
    }
  } else if (textarea.value === "") {
    textarea.style.borderBottom = "0.0625rem solid red"
    userfdb.textContent = "Textarea can't be empty"
  }
});

  function validateEmail(email) {
    const splitEmail = email.value.split('@');
    return splitEmail.length === 2 && splitEmail[1].split('.').length === 2 && splitEmail[1].split('.')[1].length >= 2;
  }
});
