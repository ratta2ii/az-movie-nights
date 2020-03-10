import React from 'react';


function Wish(props) {

  let background = {
    backgroundColor: '#ffafaf'
  };

  return (
    <div style={background}>
      <h1>{props.title} | {props.price}</h1>
  
    </div>
  );
}

export default Wish;
