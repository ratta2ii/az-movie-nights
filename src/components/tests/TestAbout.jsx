import React from 'react';
import screens from '../assets/images/screen-green.jpg';
import { Link } from 'react-router-dom';


function Screens() {


  let screenContainer = {
    backgroundColor: 'rgba(0,0,0,.8)',
    width: '100%',
    margin: '0 auto',
    // border: '5px solid #ffb120',
    minHeight: '800px',
    color: 'white',
    borderRadius: '10px',
    padding: '100px'
  };

  let rightColumn = {
    width: '50%',
    backgroundColor: '',
    padding: '0px',
    float: 'left'
  };

  let leftColumn = {
    width: '50%',
    float: 'left',
    // padding: '20px'
  };

  let screenBox = {
    width: '100%',
    height: '100%',
    padding: '40px',
    margin: '0 auto',
    // backgroundColor: 'white'
  };

  let screenStyling = {
    width: '100%',
    height: '100%'
  };

  let companyDescription = {
    fontSize: '24px',
    color: 'gainsboro',
    margin: '30px 10%',
    letterSpacing: '1px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'lighter'
  };

  let aboutUsHeader = {
    fontSize: '50px',
    textAlign: 'center',
    marginTop: '20px'
  };


  return (
    <div>
      <div style={screenContainer} >
        <div style={leftColumn} >
          <div style={screenBox} >
            <img style={screenStyling} src={screens} />
          </div>
        </div>
        <div style={rightColumn}>
          <h1 style={aboutUsHeader}>About Us</h1>
          <p style={companyDescription}>AZ Event Team is a family-owned business that takes great   pride in making sure we deliver safe, high-quality rentals and event equipment.</p>
          <p style={companyDescription}>We are here to help you plan your next event, whether that be a small backyard party,
            or a much larger city or corporate event. We are an upscale rental company offering
            exceptional service at an affordable price.</p>
          <p style={companyDescription}>Please check out some photos <Link to="/images">HERE</Link> to see some of the different type events that we have partnered with in the past.</p>  

        </div>
      </div>
      <style jsx>{`
        div {
          padding: 0;
          margin: 0;
        }
        img {
          width: 400px;
          height: 300px;
          // border: 10px solid white;
        }
      `}</style>
    </div>
  );
}

export default Screens;






// <div>
//     <h2>Pick The Perfect Screen</h2>
//     <p>Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! Choose your screen size and leave the rest to us.
//     </p>
//     <h3>Smaller Screen:</h3>
//     <ul>
//         <li>Actual Dimensions: 12ft Width x 10ft Height</li>
//         <li>Viewable Area: 9ft x 5ft (124" Television Screen)</li>
//         // <li><a href="#">Click for size scale</a></li>
//     </ul>
//     <h3>Larger Screen:</h3>
//     <ul>
//         <li>Actuals Dimensions: 20ft Width x 9.8ft Height</li>
//         <li>Viewable Area: 16ft Width x 9ft Height </li>
//         // <li><a href="#">Click for size scale</a></li>
//     </ul>
// </div>






// <h2>Pick The Perfect Screen</h2>
// <p>Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! Choose your screen size and leave the rest to us.
// </p>
// <h3>Smaller Screen:</h3>
// <ul>
//   <li>Actual Dimensions: 12ft Width x 10ft Height</li>
//   <li>Viewable Area: 9ft x 5ft (124" Television Screen)</li>
//   <li><a href="#">Click for size scale</a></li>
// </ul>
// <h3>Larger Screen:</h3>
// <ul>
//   <li>Actuals Dimensions: 20ft Width x 9.8ft Height</li>
//   <li>Viewable Area: 16ft Width x 9ft Height </li>
//   <li><a href="#">Click for size scale</a></li>
// </ul>