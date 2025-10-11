const submitButton1 = document.getElementById("submit1");
const form1 = document.getElementById("form1");
const loadingElement = document.getElementById("submit-loading");
const elementsToBlur = document.querySelectorAll(
    "body > *:not(.loading-screen)"
);

let product = "";
let name1 = "";
let phone1 = "";
let preferred1 = "";
let inquiry1 = "";

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
    if (e.target.id === "inquiry") {
        inquiry1 = e.target.value;
    }
});

form1.addEventListener("click", (e) => {
    if (e.target.id === "submit1") {
        loadingElement.style.display = "block";
        elementsToBlur.forEach((element) => {
            element.style.filter = "blur(2px)";
        });

        const currentUrl = window.location.href;

        var pageWrapper = document.body;
        var popAlertForm = document.querySelector(".popAlert-form");
        var popAlertFormBtn = document.querySelector(".hover-underline-animation");

        pageWrapper.style.pointerEvents = "none";
        pageWrapper.style.userSelect = "none";
        popAlertForm.style.pointerEvents = "none";
        popAlertForm.style.userSelect = "none";
        popAlertFormBtn.style.pointerEvents = "none";
        popAlertFormBtn.style.userSelect = "none";

        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const preferredInput = document.getElementById("preferred");
        const inquiryInput = document.getElementById("inquiry");

        if (
            nameInput.value.trim() === "" ||
            phoneInput.value.trim() === "" ||
            preferredInput.value.trim() === "" ||
            inquiryInput.value.trim() === ""
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
            loadingElement.style.display = "none";
            elementsToBlur.forEach((element) => {
                element.style.filter = "none";
            });
            return;
        }

        let formdata = new FormData();
        formdata.append("time", new Date());
        formdata.append("product", product);
        formdata.append("name", name1);
        formdata.append("phone", phone1);
        formdata.append("preferred", preferred1);
        formdata.append("inquiry", inquiry1);

        const config = { method: "POST", body: formdata, redirect: "follow" };
        fetch(
            "https://script.google.com/macros/s/AKfycbzGTait4TibGvPXgGcWLBGKrln_Bmd7cZk0SeOnirZkqlqo7030S98Edjq6qLPSVb9U/exec",
            config
        )
            .then((response) => response.text())
            .then((result) => {
                loadingElement.style.display = "none";
                elementsToBlur.forEach((element) => {
                    element.style.filter = "none";
                });

                if (result === "success") {
                    console.log("success");

                    var popAlertForm = document.querySelector(".popAlert-form");
                    popAlertForm.classList.remove("show");
                    var popAlertDescription = document.querySelector(
                        ".popAlert-description"
                    );

                    if (currentUrl.includes("/cn/")) {
                        window.alert(
                            "感謝您提供相關資料，我們會盡快聯絡您商量試駕細節。如有任何問題，歡迎隨時透過Whatsapp或電子郵件聯繫我們。"
                        );
                    } else {
                        window.alert(
                            "感謝您的試車及查詢！歡迎WhatsApp聯絡途齡產品專家。"
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
                            "發送失敗! 請重新嘗試。如問題持續發生，請直接透過Whatsapp或電子郵件聯繫我們。不便之處，敬請原諒！"
                        );
                    }
                }
                pageWrapper.style.pointerEvents = "auto";
                pageWrapper.style.userSelect = "auto";
                popAlertForm.style.pointerEvents = "auto";
                popAlertForm.style.userSelect = "auto";
                popAlertFormBtn.style.pointerEvents = "auto";
                popAlertFormBtn.style.userSelect = "auto";
            })
            .catch((error) => {
                loadingElement.style.display = "none";
                console.log("error", error);
            });
    }
});

function formOpen() {
    event.preventDefault();
    var popAlertForm = document.querySelector(".popAlert-form");
    popAlertForm.classList.toggle("show");
    var popAlertDescription = document.querySelector(".popAlert-description");
    popAlertDescription.classList.toggle("show");
    var inputElements = document.querySelectorAll("input");

    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }
}
