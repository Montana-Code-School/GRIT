<div style={{textAlign:"center"}}>
  <span className="dot" onClick="currentSlide(1)"></span>
  <span className="dot" onClick="currentSlide(2)"></span>
  <span className="dot" onClick="currentSlide(3)"></span>
  <span className="dot" onClick="currentSlide(4)"></span>
  <span className="dot" onClick="currentSlide(5)"></span>
</div>

componentDidMount() {
  this.showSlides(this.state.slideIndex);
}

dots[slideIndex-1].className += " active";

var i;
var slideIndex = this.state.slideIndex;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";

componentDidMount() {
  this.showSlides(1);
}

currentSlide(n) {
  this.showSlides(n);
}

showSlides(n) {

}

if (n > slides.length) {slideIndex}
if (n < 1) {slideIndex = slides.length}
