import React from 'react';
import "../assets/stylesheets/statsShow.css";

export default class statsShow extends React.Component {
  constructor() {
    super();
    this.statsPlusSlidesClick = this.statsPlusSlides.bind(this);
    this.statsMinusSlidesClick = this.statsMinusSlides.bind(this);
    this.state = {
      statsIndex:1
    }
  }

  componentDidMount() {
    this.statsShowSlides();
    console.log("is this working?");
  }

  componentDidUpdate() {
    this.statsShowSlides();
    return true;
  }

  statsPlusSlides() {
   let otherIndex;
   console.log(this.state.statsIndex);
   if(this.state.statsIndex < 6) {
     otherIndex = this.state.statsIndex + 1;
   } else {otherIndex = this.state.statsIndex}
   this.setState({
     statsIndex: otherIndex
   });
   console.log("state is set")
   console.log(this.state.statsIndex);
  }

  statsMinusSlides() {
    let otherIndex;
    if(this.state.statsIndex > 1) {
      otherIndex = this.state.statsIndex - 1;
    } else {otherIndex = this.state.statsIndex}
    this.setState({
      statsIndex: otherIndex
      });
    }

  statsShowSlides() {
    console.log(this.state.statsIndex);
      var i;
      var statsIndex = this.state.statsIndex;
      var stats = document.getElementsByClassName("statsText");
      for (i = 0; i < stats.length; i++) {
          stats[i].style.display = "none";
      }
      stats[statsIndex-1].style.display = "block";

  }

  render () {
    return (
      <div className='statsShow'>

        <div className="stats-slideshow-container statsRight">

            <div className="statsText fade">
              <div className="numbertext">1 / 6</div>
                <h1> THE FUTURE IS FEMALE. AND TRADES. </h1>
                  <p> "One solution to increasing labor participation is to get people in certain demographics - women, veterans and the disabled - to enter the workforce." Barb Wagner, the chief economist at the Montana Department of Labor and Industry. </p>
              </div>


            <div className="statsText fade">
              <div className="numbertext">2 / 6</div>
                <div>
                  <h1> WIDESPREAD TRADE SHORTAGES </h1>
                    <p> Montana is facing an impending economic calamity if something isn&rsquo;t done to address an expected critical shortfall of workers. An estimated 16 million middle-skill jobs (jobs that require post-secondary education or certification that is not a bachelor&rsquo;s, or higher degree) will be created through 2024. </p>
                  </div>
                </div>

            <div className="statsText fade">
              <div className="numbertext">3 / 6</div>
                <h1> THE CULPRITS </h1>
                  <ul>
                    <li> Widely-accepted stereotypes about women&rsquo;s physical inabilities. </li>
                    <li> A tolerance for sexual innuendo, homophobia and outright sexual harassment in the workplace. </li>
                    <li> Inadequate access to employment and training </li>
                  </ul>
              </div>

            <div className="statsText fade">
              <div className="numbertext">4 / 6</div>
                <h1> WOMEN&rsquo;S WAGES </h1>
                  <p> The wage gap in the construction industry is suprisingly small. Women earn 91% of men&rsquo;s wages compared to the overall average of 82% across all professions. Jobs traditionally employed by men pay 20-30% more than jobs traditionally held by women. </p>
              </div>

              <div className="statsText fade">
                <div className="numbertext">5 / 6</div>
                  <h1> UNDERREPRESENTED </h1>
                    <div>
                      <p> In 2014, women made up 46.9% of workforce. Of that: </p>
                        <ul>
                          <li> 0.5% were roofers </li>
                          <li> 1.4% were automative service technicians and mechanics </li>
                          <li> 1.7% were carpenters </li>
                          <li> 2.4% were electricians </li>
                          <li> 4.8% were welders </li>
                          <li> 5.7% were firefighters </li>
                        </ul>
                    </div>
                  </div>

                <div className="statsText fade">
                  <div className="numbertext">6 / 6</div>
                    <h1> POOR ENROLLMENT </h1>
                      <p> Fewer than 5% of all students enrolled in high school technical
                      programs are girls. </p>
                  </div>

            <a className="statsPrev" onClick={this.statsMinusSlidesClick}>&#10094;</a>
            <a className="statsNext" onClick={this.statsPlusSlidesClick}>&#10095;</a>
         </div>
         <br/>
      </div>
    );
  }
};
