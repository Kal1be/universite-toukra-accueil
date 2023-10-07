// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-150px";
  }
}