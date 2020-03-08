import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404';
import Home from './Home';
import Modal from './Modal';
import Nav from './Nav';
import bgImage from '../assets/images/bg11.jpg';
// import AllProducts from './AllProducts';
// import c from './../constants';
// import Moment from 'moment';
// import { v4 } from 'uuid';



function App() {


  return (
    <div style={background}>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Home />} />

        <Route path='/modal' render={() => <Modal />} />

        {/* <Route path='/productlist' render={() => <ProductList
          listOfTickets={this.props.masterTicketList} />} /> */}

        <Route component={Error404} />
      </Switch>
      <style global jsx>{` `}</style> 
    </div>
  );
}


App.propTypes = {
  masterProductList: PropTypes.array
};


const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList
  };
};


export default withRouter(connect(mapStateToProps)(App));





/* ------------------ CSS Styling Below ------------------ */

var background = {
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'scroll',
  overflowX: 'hidden'
};
