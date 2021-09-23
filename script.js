// get all the elements under this class.
let element = document.getElementsByClassName("inner-box");

// now loop-in in every element and check the which inner-box is being clicked.
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    // gets the inner-box which has the zoomInnerBox css implemented.
    let activeOne = document.querySelector(".zoomInnerBox");
    // if yes then remove it before implementing it to another inner-box
    if (activeOne) {
      activeOne.classList.remove("zoomInnerBox");
      activeOne.parentNode.classList.remove("zoomOuterBox");
    }
    // add the zoom css class in both outer-box and inner-box
    element[i].classList.add("zoomInnerBox");
    element[i].parentNode.classList.add("zoomOuterBox");
  });
}
