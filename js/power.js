var element = document.querySelector(".power-bg-light");
var exhibitionHome = document.getElementById("power-s");

window.addEventListener("scroll", function () {
  var elementRect = exhibitionHome.getBoundingClientRect();

  // 计算元素底部相对于视口顶部的距离
  var elementBottom = elementRect.top + elementRect.height;

  // 计算视口底部相对于文档顶部的距离
  var viewportBottom = window.scrollY;

  console.log("b:", viewportBottom);
  console.log("a", elementBottom);




  // 检查滚动位置是否已经达到了`exhibition-home`元素的底部
  if (viewportBottom >= elementBottom) {
    element.style.background = "var(--localnav-background-stuck, rgba(222, 222, 222, 0.8))";
  } else {
    element.style.background = "var(--localnav-background-stuck, rgba(222, 222, 222, 1))";
  }
});
