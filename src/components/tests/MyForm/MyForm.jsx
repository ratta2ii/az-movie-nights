import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyForm.css';


export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.wishList = props.wishList;
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  wishListEntries(obj) {
    let counter = 1;
    var answer = `CURRENT WISH LIST (optional): 
    `;
    var ent = Object.entries(obj);
    for (let i in ent) {
      answer += ` 
      ${counter}.) ${ent[i][1].title}`;
      counter++;
    }
    // DO NOT ADJUST SPACING OR INDENTATION HERE!!! THESE ARE BACKTICKS.
    answer += `
`;
    return answer;
  }



  render() {

    const { status } = this.state;
    return (

      <div className={styles.formComponent}>



        <div className={styles.infoContainer}>
          <span className={styles.note}>Important</span>
          <p className={styles.information}>

            The Wish List you created will be sent to the team in addition to the rest of the information you fill out in the form. The wish list is NOT required though, so we will leave that part up to you. You can expect a call with one our staff members within the next 24 hours, or you may call (555)-555-5555 any time. Thank you so much for contacting us, we are happy to be a part of your next event.
              </p>
          <Link to='/wishlist' className={styles.wishLink}>VIEW WISH LIST HERE</Link>.
          </div>





        <form
          id={styles.reserveForm}
          onSubmit={this.handleSubmitForm}
          action="https://formspree.io/mdoddgdr"
          method="POST"
        >
          <div className={styles.formEntryNameDiv}>
            <p className={styles.formLabel}>Name*</p>
            <input className={styles.formInput} type="text" name="name" />
          </div>

          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>Email*</p>
            <input className={styles.formInput} type="email" name="email" />
          </div>


          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>Phone*</p>
            <input className={styles.formInput} type="tel" name="phone" />
          </div>

          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>Street Address*</p>
            <input className={styles.formInput} type="address" name="street" />
          </div>

          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>City, State*</p>
            <input className={styles.formInput} type="address" name="cityState" />
          </div>

          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>Zip Code*</p>
            <input className={styles.formInput} id="zip" name="zip" type="text" pattern="[0-9]*" />
          </div>


          <div className={styles.formEntryDiv}>
            <p className={styles.formLabel}>Event Date*</p>
            <input className={styles.formDateInput} type="date" name="date" />
          </div>



          <div className={styles.textBoxDiv} >
            <textarea className={styles.textBox} name="message" rows="10" cols="30">
              {this.wishListEntries(this.wishList)}
            </textarea>
          </div>

          {status === 'SUCCESS' ? <p>Thank You! Your form was submitted!</p> : <button
            className={styles.submitButton} >SEND RESERVATION NOW</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form >
        <style global jsx>{` 
          //  .submitButton {
          //    width: 100px;
          //  }
        `}</style>
      </div >
    );
  }

  handleSubmitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

}



















