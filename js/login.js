let form = document.getElementById(`form`);
let user = document.getElementById(`name`);
let pwd = document.getElementById(`pwd`);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (user.value == "" || pwd.value == "") {
    alert("Xatolik");
  } else {
    // let userValue = user.value;
    // let pwdValue = pwd.value;
    console.log(`Email: ${user.value} \nPassword: ${pwd.value}`);
    // localStorage.setItem("name", userValue);
    // localStorage.setItem("pwd", pwdValue);

    if (
      localStorage.getItem("name") == user.value &&
      localStorage.getItem("password") == pwd.value
    ) {
      window.location.href = "https://movies-render-perfect.vercel.app/";
    } else {
      alert("Ma'lumot xato");
    }
  }

  user.value = "";
  pwd.value = "";
});
