import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReserveForm.css';
import { Email } from './../../constants/smtp';



function ReserveForm() {

  let _names = null;
  let _email = null;
  let _phoneNumber = null;
  let _date = null;
  let _message = null;

  function handleSubmitReserveForm(event) {
    event.preventDefault();

    const names = _names.value;
    const email = _email.value;
    const phoneNumber = _phoneNumber.value;
    const date = _date.value;
    const message = _message.value;

    // eslint-disable-next-line no-unused-vars 
    const messageConfirmation = 'Your message has been sent successfully!';

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'tismetrm@gmail.com',
      Password: '',
      To: 'singhdeo.priyanka@gmail.com',
      From: 'tismetrm@gmail.com',
      Subject: 'YOU HAVE A RESERVATION',
      Body: `Name: ${names}
                    Email: ${email}
                    Phone: ${phoneNumber}
                    Date: ${date}
                    Message: ${message}`
    }).then(
      messageConfirmation => alert(messageConfirmation)
    );

    // props.onSubmitReserveForm({ names: _names.value, email: _email.value, _phoneNumber: _phoneNumber.value,
    // date: _date.value, message: _message.value, id: v4() });

    // Reset Form Fields
    _names.value = '';
    _email.value = '';
    _phoneNumber.value = '';
    _date.value = '';
    _message.value = '';
  }

  return (
    <div id={styles.reserveFormComponent}>

      <div className={styles.infoContainer}>
        <span className={styles.note}>Important</span>
        <p className={styles.information}>
          The Wish List you created will be sent to the team in addition to the rest of the information you fill out in the form. The wish list is NOT required though, so we will leave that part up to you. You can expect a call with one our staff members within the next 24 hours, or you may call (555)-555-5555 any time. Thank you so much for contacting us, we are happy to be a part of your next event.
        </p>
        <Link to='/wishlist' className={styles.wishLink}>VIEW WISH LIST HERE</Link>.
      </div>

      <div className={styles.reserveFormContainer}>

        <form id='reserveForm' onSubmit={handleSubmitReserveForm}>

          <p className={styles.formLabel}>Full Name</p>
          <input className={styles.inputField}
            type='text'
            id='names'
            // placeholder='First and Last Name'
            ref={(input) => { _names = input; }} />

          <p className={styles.formLabel}>Email</p>
          <input className={styles.inputField}
            type='email'
            id='email'
            // placeholder='Email Address'
            ref={(input) => { _email = input; }} />

          <p className={styles.formLabel}>Phone Number</p>
          <input className={styles.inputField}
            type='tel'
            id='phoneNumber'
            // placeholder='Enter PhoneNumber'
            ref={(input) => { _phoneNumber = input; }} />

          <p className={styles.formLabel}>Event Date</p>
          <input className={styles.inputField}
            type='date'
            id='date'
            // placeholder='Choose Date'
            ref={(input) => { _date = input; }} />

          <p className={styles.formLabel}>Message</p>
          <input className={styles.messageField}
            type='text'
            id='message'
            // placeholder='Optional'
            ref={(input) => { _message = input; }} />

          <div>
            <button className={styles.submitButton} type='submit'>BOOK NOW</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ReserveForm;



