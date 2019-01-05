var slideIndex = 1;
showImage(slideIndex);

function plusIndex(n){
	showImage(slideIndex += n);
}

function currentDot(n) {
  showImage(slideIndex = n);
}

function showImage(n){
	var i;
    var x = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName("dot-selector");

    if (n > x.length) {slideIndex = x.length} 
    if (n < 1) {slideIndex = 1} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    for (i = 0; i < dot.length; i++) {
 		dot[i].className = dot[i].className.replace(" active", "");
  	}
    x[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active"; 

}