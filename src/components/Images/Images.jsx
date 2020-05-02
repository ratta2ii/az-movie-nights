import React from 'react';
// import { render } from 'react-dom';
import styles from './Images.css';
import image1 from './../../assets/images/images1.jpg';
import image2 from './../../assets/images/images2.jpg';
import image3 from './../../assets/images/images3.jpg';
import cool from './../../assets/images/cool.jpeg';
import giantScreen from './../../assets/images/giant-screen.jpg';



class Images extends React.Component {


  componentDidMount() {
    let containerOfImages = document.getElementById('row');
    containerOfImages.addEventListener('click', this.handleDisplayModal, false);
  }


  componentWillUnmount() {
    let containerOfImages = document.getElementById('row');
    containerOfImages.removeEventListener('click', this.handleDisplayModal);
  }


  handleDisplayModal(props) {
    var modal = document.getElementsByTagName('section');
    modal[0].style.display = 'block';
    modal[0].firstElementChild.nextSibling.src = props.target.src;
  }


  // When the user clicks on <span> (x), close the modal
  handleSpanCloseModal() {
    var modal = document.getElementsByTagName('section');
    modal[0].style.display = 'none';
  }


  render() {

    return (
      <div id={styles.imageComponent}>

        <div id="row" className={styles.row}>

          <div className={styles.column}>
            <img src={cool} id="pic1" className={styles.imageStyling} />
            <img src={image2} className={styles.imageStyling} />
            <img src={image3} className={styles.imageStyling} />
            <img src={cool} className={styles.imageStyling} />
            <img src={giantScreen} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
          </div>

          <div className={styles.column}>
            <img src={giantScreen} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={image2} className={styles.imageStyling} />
            <img src={giantScreen} className={styles.imageStyling} />
            <img src={image3} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={image2} className={styles.imageStyling} />
          </div>

          <div className={styles.column}>
            <img src={image3} className={styles.imageStyling} />
            <img src={cool} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={giantScreen} className={styles.imageStyling} />
            <img src={image1} className={styles.imageStyling} />
            <img src={image3} className={styles.imageStyling} />
          </div>

        </div>

        {/* <!-- The Modal --> */}
        <section id="myModal" className={styles.modal}>
          <span onClick={this.handleSpanCloseModal} className={styles.close}>&times;</span>
          <img className={styles.modalContent} id="img01" />
          <div id="caption"></div>
        </section>

      </div>
    );
  }

}

export default Images;
















// import React from 'react';
// import styles from './Images.css';
// import image1 from './../../assets/images/images1.jpg';
// import image2 from './../../assets/images/images2.jpg';
// import image3 from './../../assets/images/images3.jpg';
// import cool from './../../assets/images/cool.jpeg';
// import giantScreen from './../../assets/images/giant-screen.jpg';
// import ModalImages from '../ModalImages/ModalImages';
// import { render } from 'react-dom';



// class Images extends React.Component {

//   // Add event listeners to all image tags to activate ModalImages. Update Later
//   // window.onload = function () {
//   //   let x = document.getElementsByTagName('img');
//   //   console.log(x);
//   //   for (let i = 0; i < x.length; i++) {
//   //     x[i].addEventListener('click', handleDisplayModal, false);
//   //   }
//   // };

//   componentDidMount() {
//     let x = document.getElementsByTagName('img');
 
//     console.log(removeThis);
//     for (let i = 0; i < x.length; i++) {
//       x[i].addEventListener('click', this.handleDisplayModal, false);
//     }
//   }



//   handleDisplayModal(props) {
//     // Get the modal
//     var modal = document.getElementsByTagName('section');
//     modal[0].style.display = 'block';
//     modal[0].firstElementChild.nextSibling.src = props.target.src;
//   }


//   // When the user clicks on <span> (x), close the modal
//   handleSpanCloseModal() {
//     // Get the modal
//     var modal = document.getElementsByTagName('section');
//     modal[0].style.display = 'none';
//   }

//   render() {

//     return (
//       <div id={styles.imageComponent}>

//         <div id="row" className={styles.row}>

//           <div className={styles.column}>
//             <img src={cool} id="pic1" className={styles.imageStyling} />
//             <img src={image2} className={styles.imageStyling} />
//             <img src={image3} className={styles.imageStyling} />
//             <img src={cool} className={styles.imageStyling} />
//             <img src={giantScreen} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//           </div>

//           <div className={styles.column}>
//             <img src={giantScreen} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={image2} className={styles.imageStyling} />
//             <img src={giantScreen} className={styles.imageStyling} />
//             <img src={image3} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={image2} className={styles.imageStyling} />
//           </div>

//           <div className={styles.column}>
//             <img src={image3} className={styles.imageStyling} />
//             <img src={cool} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={giantScreen} className={styles.imageStyling} />
//             <img src={image1} className={styles.imageStyling} />
//             <img src={image3} className={styles.imageStyling} />
//           </div>

//         </div>

//         {/* <!-- The Modal --> */}
//         <section id="myModal" className={styles.modal}>
//           <span onClick={this.handleSpanCloseModal} className={styles.close}>&times;</span>
//           <img className={styles.modalContent} id="img01" />
//           <div id="caption"></div>
//         </section>

//       </div>
//     );
//   }

// }

// export default Images;