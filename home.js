const popupViews = document.querySelectorAll(".popup-view");
const popBtns = document.querySelectorAll(".evolution");
const closeBtn = document.querySelectorAll(".closeBtn");

/*Show Evolution */
const popUp = (popUpClick) => {
  popupViews[popUpClick].classList.add("active");
};

popBtns.forEach((popUpBtn, i) => {
  popUpBtn.addEventListener("click", () => {
    popUp(i);
  });


  /*CLose Evolution */
  closeBtn.forEach((closeBtns) => {
    closeBtns.addEventListener("click", () => {
      popupViews.forEach((popupView) => {
        popupView.classList.remove("active");
      });
    });
  });
});
