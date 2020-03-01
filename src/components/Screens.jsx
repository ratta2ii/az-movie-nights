import React from 'react';
import screens from '../assets/images/screens.jpg';


function Screens() {


  let screenContainer = {
    backgroundColor: 'rgba(0,0,0,.8)',
    width: '65%',
    margin: '0 auto',
    border: '5px solid #ffb120',
    minHeight: '500px',
    color: 'white',
    borderRadius: '10px',
    marginTop: '',
  }

  let rightColumn = {
    width: '50%',
    backgroundColor: '',
    padding: '0px 30px',
    float: 'left'
  }

  let leftColumn = {
    width: '50%',
    padding: '0px 100px',
    float: 'left',
    padding: '20px'
  }

  let screenBox = {
    width: '80%',
    padding: '20px',
    margin: '0 auto'
  }


  return (
    <div>
      <div style={screenContainer} >
        <div style={leftColumn} >
          <div style={screenBox} >
            <img src={screens} />
          </div>
        </div>
        <div style={rightColumn}>
            <h2>Pick The Perfect Screen</h2>
            <p>Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! Choose your screen size and leave the rest to us.
            </p>
            <h3>Smaller Screen:</h3>
            <ul>
                <li>Actual Dimensions: 12ft Width x 10ft Height</li>
                <li>Viewable Area: 9ft x 5ft (124" Television Screen)</li>
                <li><a href="#">Click for size scale</a></li>
            </ul>
            <h3>Larger Screen:</h3>
            <ul>
                <li>Actuals Dimensions: 20ft Width x 9.8ft Height</li>
                <li>Viewable Area: 16ft Width x 9ft Height </li>
                <li><a href="#">Click for size scale</a></li>
            </ul>
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
