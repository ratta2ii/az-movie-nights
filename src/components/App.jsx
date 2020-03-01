import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404';
import Home from './Home';
import TicketList from './TicketList';
import ProductList from './ProductList';
// import c from './../constants';
// import Moment from 'moment';
// import { v4 } from 'uuid';



function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Home />} />

        <Route path='/ticketlist' render={() => <ProductList
          listOfTickets={this.props.masterTicketList} />} />

        <Route component={Error404} />
      </Switch>
      <style global jsx>{`
  
        `}</style>
    </div>
  );
}


App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
