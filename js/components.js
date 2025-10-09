document.addEventListener("DOMContentLoaded", function () {
  var buttons = Array.from(document.querySelectorAll(".model-button"));
  if (buttons.length) {
    buttons[0].classList.add("active");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  }

  var items = Array.from(document.querySelectorAll(".accessories-item2"));
  if (!items.length) {
    return;
  }

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
      var activeIds = items
        .filter(function (activeItem) {
          return activeItem.classList.contains("active");
        })
        .map(function (activeItem) {
          return activeItem.id;
        });
      handleVisibility(activeIds);
    });
  });

  function setOpacity(id, visible) {
    var element = document.getElementById(id);
    if (element) {
      element.style.opacity = visible ? "1" : "0";
    }
  }

  function handleVisibility(activeIds) {
    setOpacity("headrest", activeIds.includes("selectHeadRest"));
    setOpacity("pushhandlers", activeIds.includes("selectPushHandlers"));
    setOpacity("phoneholder", activeIds.includes("selectPhoneHolder"));
    setOpacity("storagebag", activeIds.includes("selectStorageBag"));
    setOpacity("sideguardarm", activeIds.includes("selectArmGuard"));
    setOpacity("sideguardthigh", activeIds.includes("selectThighGuard"));
    setOpacity("infusionbracket", activeIds.includes("selectInfusionBracket"));
  }
});
