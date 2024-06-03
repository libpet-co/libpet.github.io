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
      "https://script.google.com/macros/s/AKfycbzZe2akWQmUTJ3UI_TFRv68dQLPkCLx_QXUMJcYD2lxqGj7c0cdL6SGef6oiQwEUx5L/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
      }
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
