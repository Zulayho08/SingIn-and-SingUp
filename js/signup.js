let form = document.getElementById(`form`);
let name = document.getElementById(`name`);
let surename = document.getElementById(`surename`);
let email = document.getElementById(`email`);
let pwd = document.getElementById(`pwd`);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (name.value == "" || pwd.value == "") {
    alert("Xatolik");
  } else {
    let nameValue = name.value;
    let pwdValue = pwd.value;
    let surenameValue = surename.value;
    let emailValue = email.value;
    console.log(
      `Name: ${name.value} \n Surename: ${surenameValue}\n Email: ${emailValue} \nPassword: ${pwd.value} `
    );
    localStorage.setItem("name", nameValue);
    localStorage.setItem("surename", surenameValue);
    localStorage.setItem("password", pwdValue);
    localStorage.setItem("Email", emailValue);
    window.location.href = "https://movies-render-perfect.vercel.app/";
  }

  name.value = "";
  pwd.value = "";
  surename.value = "";
  email.value = "";
});
