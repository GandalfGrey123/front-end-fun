var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");    
    var panel = this.nextElementSibling;

    if (panel.style.visibility === "visible") {
      panel.style.visibility = "hidden";
      panel.style.width = '0%';
      panel.style.height = '0%';
    } else {
      panel.style.visibility = "visible";
      panel.style.width = '100%';
      panel.style.height = '100%';
    }
  });
}