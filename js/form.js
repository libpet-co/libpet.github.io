const submitButton1 = document.getElementById("submit1");
const form1 = document.getElementById("form1");

let product = "";
let name1 = "";
let phone1 = "";
let preferred1 = "";

form1.addEventListener("change", (e) => {
  if (e.target.id === "name") {
    name1 = e.target.value;
  }
  if (e.target.id === "phone") {
    phone1 = e.target.value;
  }
  if (e.target.id === "preferred") {
    preferred1 = e.target.value;
  }
});

form1.addEventListener("click", (e) => {
  if (e.target.id === "submit1") {
    const currentUrl = window.location.href;

    var pageWrapper = document.body;
    var popAlertForm = document.querySelector(".popAlert-form");
    var popAlertFormBtn = document.querySelector(".hover-underline-animation");
    var formOpen = document.querySelector(".formOpen");

    pageWrapper.style.pointerEvents = "none";
    pageWrapper.style.userSelect = "none";
    popAlertForm.style.pointerEvents = "none";
    popAlertForm.style.userSelect = "none";
    popAlertFormBtn.style.pointerEvents = "none";
    popAlertFormBtn.style.userSelect = "none";
    formOpen.style.pointerEvents = "none";
    formOpen.style.userSelect = "none";

    // 檢查必填欄位
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const preferredInput = document.getElementById("preferred");

    if (
      nameInput.value.trim() === "" ||
      phoneInput.value.trim() === "" ||
      preferredInput.value.trim() === ""
    ) {
      if (currentUrl.includes("/cn/")) {
        window.alert("請填寫所有必填欄位讓我們處理您的試駕申請! 感謝!");
      } else {
        window.alert(
          "Please fill in all the fields to let us proceed with your test drive booking! Thank you!"
        );
      }
      pageWrapper.style.pointerEvents = "auto";
      pageWrapper.style.userSelect = "auto";
      popAlertForm.style.pointerEvents = "auto";
      popAlertForm.style.userSelect = "auto";
      popAlertFormBtn.style.pointerEvents = "auto";
      popAlertFormBtn.style.userSelect = "auto";
      formOpen.style.pointerEvents = "auto";
      formOpen.style.userSelect = "auto";
      return;
    }

    let formdata = new FormData();
    formdata.append("time", new Date());
    formdata.append("product", product);
    formdata.append("name", name1);
    formdata.append("phone", phone1);
    formdata.append("preferred", preferred1);

    const config = { method: "POST", body: formdata, redirect: "follow" };
    //call api
    fetch(
      "https://script.google.com/macros/s/AKfycbxi5ZuyFSWlLz1R4cUNdKBmjaWrez_yfyKg_mz49P_7COq88y7mMtBeVvENmhYuD6sQ/exec",
      config
    )
      .then((response) => response.text())
      .then((result) => {
        if (result === "success") {
          console.log("success");
          let popup = document.getElementById("popAlert");
          popup.classList.toggle("active");

          var popAlertForm = document.querySelector(".popAlert-form");
          popAlertForm.classList.remove("show");
          var popAlertDescription = document.querySelector(
            ".popAlert-description"
          );
          // popAlertDescription.classList.remove("show");

          if (currentUrl.includes("/cn/")) {
            window.alert(
              "感謝您提供相關資料，我們會盡快聯絡您商量試駕細節。如有任何問題，歡迎隨時透過Whatsapp或電子郵件聯繫我們。"
            );
          } else {
            window.alert(
              "Thank you for providing your relevant information for the test drive booking. We will contact you as soon as possible for the details! If you need further information, please feel free to contact us via Whatsapp or Email directly."
            );
          }
        } else {
          const currentUrl = window.location.href;
          if (currentUrl.includes("/cn/")) {
            window.alert(
              "發送失敗! 請重新嘗試。如問題持續發生，請直接透過Whatsapp或電子郵件聯繫我們。不便之處，敬請原諒！"
            );
          } else {
            window.alert(
              "Oops! There is some problems when sending your information. Please try again. If this keeps happen, please contact us via Whatsapp or Email directly."
            );
          }
        }
        pageWrapper.style.pointerEvents = "auto";
        pageWrapper.style.userSelect = "auto";
        popAlertForm.style.pointerEvents = "auto";
        popAlertForm.style.userSelect = "auto";
        popAlertFormBtn.style.pointerEvents = "auto";
        popAlertFormBtn.style.userSelect = "auto";
        formOpen.style.pointerEvents = "auto";
        formOpen.style.userSelect = "auto";
      })
      .catch((error) => console.log("error", error));
  }
});

function togglePop(productClick) {
  product = productClick;
  let popup = document.getElementById("popAlert");
  popup.classList.toggle("active");

  var popAlertForm = document.querySelector(".popAlert-form");
  popAlertForm.classList.remove("show");
  var inputElements = document.querySelectorAll("input");

  // 遍历并清空每个 input 元素
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].value = "";
  }

  var popAlertDescription = document.querySelector(".popAlert-description");
  // popAlertDescription.classList.remove("show");
}

function togglePop2() {
  let popup = document.getElementById("popAlert2");
  popup.classList.toggle("active");
}

function formOpen() {
  event.preventDefault();
  var popAlertForm = document.querySelector(".popAlert-form");
  popAlertForm.classList.toggle("show");
  var popAlertDescription = document.querySelector(".popAlert-description");
  popAlertDescription.classList.toggle("show");
  var inputElements = document.querySelectorAll("input");

  // 遍历并清空每个 input 元素
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].value = "";
  }
}
