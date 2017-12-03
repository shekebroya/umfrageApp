import React, { Component } from 'react';

class Landingpage extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="slider">
          <ul className="slides">
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/1"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/2"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/3"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/4"
                alt="natur"
              />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landingpage;
