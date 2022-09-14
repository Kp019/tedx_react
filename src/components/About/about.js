import React from 'react';
import "./about.css"
import 'bootstrap-4-react';
import 'react-bootstrap';
import "bootstrap";



function About() {
  return (
    <div className="ftco-about ftco-counter ftco-no-pb ftco-section" id="about-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-4 col-lg-3 d-flex">
          <div className="img-about d-flex align-items-stretch">
            <div className="overlay"></div>
            <div className="img d-flex align-self-stretch align-items-center"></div>
          </div>
        </div>
    {/* <div className="col-md-6 col-lg-7 pl-lg-5 pt-5">
          <div className="row justify-content-start pb-3">
            <div className="col-md-12 heading-section ftco-animate">
              <span className="subheading">Welcome</span>
              <h2 className="mb-4" >About Me</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand
                times and everything that was left from its origin would be the word "and" and the Little Blind Text
                should turn around and return to its own, safe country. But nothing the copy said could convince her and
                so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and
                Parole and dragged her into their agency, where they abused her for their.</p>
            </div>
          </div>
          <div className="counter-wrap ftco-animate d-flex mt-md-3">
            <div className="text p-4 pr-5 bg-primary">
              <p className="mb-0">
                <span className="number" data-number="50">0</span>
                <span>Years Experienced</span>
              </p>
            </div>
          </div>
        </div> */}

        <div>
        <div className="heading-section">
              <span className="subheading">Welcome</span>
              <h2 className="h" >About Me</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand
                times and everything that was left from its origin would be the word "and" and the Little Blind Text
                should turn around and return to its own, safe country. But nothing the copy said could convince her and
                so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and
                Parole and dragged her into their agency, where they abused her for their.</p>
            </div>
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default About