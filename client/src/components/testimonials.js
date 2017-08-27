import React from 'react';
import '../assets/stylesheets/testimonials.css';
import girlsBike from '../assets/img/GRIT_girls_bike.jpg';
import girlsChopsaw from '../assets/img/GRIT_girls_chopsaw.jpg';
import girlsWelding from '../assets/img/GRIT_girls_welding.jpg';
import girlsSaw from '../assets/img/GRIT_girls_circularsaw.jpg';
import girlsDrill from '../assets/img/GRIT_girls_drill.jpg';

export default class Testimonials extends React.Component {
  constructor() {
    super();
    this.plusSlidesClick = this.plusSlides.bind(this);
    this.minusSlidesClick = this.minusSlides.bind(this);
    this.state = {
      slideIndex:1
    }
  }

  componentDidMount() {
    this.showSlides();
  }

  componentDidUpdate() {
    this.showSlides();
    return true;
  }

  plusSlides() {
   let nextIndex;
   if(this.state.slideIndex < 5) {
     nextIndex = this.state.slideIndex + 1;
   } else {nextIndex = this.state.slideIndex}
   this.setState({
     slideIndex: nextIndex
   });
  }

  minusSlides() {
    let nextIndex;
    if(this.state.slideIndex > 1) {
      nextIndex = this.state.slideIndex - 1;
    } else {nextIndex = this.state.slideIndex}
    this.setState({
      slideIndex: nextIndex
    });
  }

  showSlides() {
      var i;
      var slideIndex = this.state.slideIndex;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

  render () {
    return (
      <div className='testimonials'>
        <h1 className='orange'> GRIT STORIES </h1>
        <br/>
        <div className="slideshow-container">

            <div className="mySlides fade">
              <div className="numbertext">1 / 5</div>
              <img src={girlsBike} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 5</div>
              <img src={girlsChopsaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 5</div>
              <img src={girlsWelding} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 5</div>
              <img src={girlsSaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 5</div>
              <img src={girlsDrill} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <a className="prev" onClick={this.minusSlidesClick}>&#10094;</a>
            <a className="next" onClick={this.plusSlidesClick}>&#10095;</a>
         </div>
         <br/>
      </div>
    );
  }
};
