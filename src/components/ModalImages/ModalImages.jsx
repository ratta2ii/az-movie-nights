import React from 'react';
import styles from './ModalImages.css';
import cool from './../../assets/images/cool.jpeg';


function ModalImages() {

  // Get the modal
  var modal = document.getElementsByTagName('section');

  // Get the image and insert it inside the modal - use its 'alt' text as a caption
  // var img = document.getElementsByTagName('img')[4];

  // var modalImg = document.getElementsByTagName('img');
  // var captionText = document.getElementById('caption');

  function handleImageFunction(props) {
    modal[0].style.display = 'block';
    modal[0].firstElementChild.nextSibling.src = props.src;
    // modalImg.src = props.src;
    // captionText.innerHTML = this.alt;
  }

  // When the user clicks on <span> (x), close the modal
  function handleSpanCloseModal() {
    modal[0].style.display = 'none';
  }


  return (
    <div id={styles.modalImagesComponent}>

      <img id="myImg" src={cool} className={styles.imgStyling} onClick={() => {
        handleImageFunction({
          src: cool
        });
      }} />

     

      {/* <!-- The Modal --> */}
      <section id="myModal" className={styles.modal}>
        <span onClick={handleSpanCloseModal} className={styles.close}>&times;</span>
        <img className={styles.modalContent} id="img01" />
        <div id="caption"></div>
      </section>
    </div>
  );
}

export default ModalImages;