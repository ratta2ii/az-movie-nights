import React from 'react';



export default function Footer() {

  let background = {
    height: '200px',
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: '200px',
    postion: 'relative',
    bottom: '0',
    left: '0',
    width: '100%'
  };

  return (
    <div style={background}>
      <h1>I am the Footer!</h1>
      <style jsx>{`
        h1 {
          color: white;
          margin: 250px;
        }
        `}</style>
    </div>
  );
}
