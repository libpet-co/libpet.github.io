const submitButton = document.getElementById("submit");
const form = document.getElementById("form");

let name = "";
let phone = "";
let preferred = "";

form.addEventListener("change", (e) => {
  if (e.target.id === "name") {
    name = e.target.value;
  }
  if (e.target.id === "phone") {
    phone = e.target.value;
  }
  if (e.target.id === "preferred") {
    preferred = e.target.value;
  }
});

form.addEventListener("click", (e) => {
  if (e.target.id === "submit") {
    let formdata = new FormData();
    formdata.append("time", new Date());
    formdata.append("name", name);
    formdata.append("phone", phone);
    formdata.append("preferred", preferred);

    const config = { method: "POST", body: formdata, redirect: "follow" };
    //call api
    fetch(
      "https://script.google.com/macros/s/AKfycbx5oX8yAyhvzc-3oyA9ox_tvyXd30RE5RW5HEyXkrAMgQ93SeXs5bhhGeEUDHnC9VAC/exec",
      config
    )
      .then((response) => response.text())
      .then((result) => {
        if (result === "success") {
          console.log("success");
        }
      })
      .catch((error) => console.log("error", error));
  }
});
