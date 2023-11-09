var element = document.querySelector(".bg-custom-light");
var exhibitionHome = document.getElementById("exhibition-main");

window.addEventListener("scroll", function () {
  var elementRect = exhibitionHome.getBoundingClientRect();

  // 计算元素底部相对于视口顶部的距离
  var elementBottom = elementRect.top + elementRect.height;

  // 计算视口底部相对于文档顶部的距离
  var viewportBottom = window.scrollY;

  // console.log(elementBottom);
  // console.log(viewportBottom);

  // console.log(elementBottom);
  // console.log(viewportBottom);
  // 检查滚动位置是否已经达到了`exhibition-home`元素的底部
  if (viewportBottom >= elementBottom) {
    element.style.webkitBackdropFilter = "saturate(180%) blur(20px)";
    element.style.backdropFilter = "saturate(180%) blur(20px)";
    element.style.borderColor = "transparent";
  } else {
    element.style.webkitBackdropFilter = "none";
    element.style.backdropFilter = "none";
    element.style.borderColor = "transparent";
  }
});
