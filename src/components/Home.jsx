import React from 'react';
import Screens from './Screens';
import Header from './Header';
import AllProducts from './AllProducts';
import Nav from './Nav';
import bgImage from '../assets/images/bg1.jpg';
import Modal from './Modal';


function Home() {

  // var background = {
  //   backgroundImage: `url(${bgImage})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100% 100%',
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute',
  //   overflow: 'scroll',
  //   overflowX: 'hidden'
  // };

  return (
    <div>
      <Header />
      {/* <Screens /> */}
      <h1></h1>
      <AllProducts />
      <h1></h1>
      <style jsx>{`
        h1 {
          color: white;
          margin: 250px;
        }
        `}</style>
    </div>
  );
}

export default Home;





