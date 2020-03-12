/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ReserveForm.css';
import { v4 } from 'uuid';




function ReserveForm(props) {

    let _names = null;
    let _email = null;
    let _phoneNumber = null;
    let _date = null;
    let _message = null;

    function handleSubmitReserveForm(event) {
        event.preventDefault();

        console.log(_names.value);
        console.log(_email.value);
        console.log(_phoneNumber.value);
        console.log(_date.value);
        console.log(_message.value);

        // props.onSubmitReserveForm({ names: _names.value, email: _email.value, _phoneNumber: _phoneNumber.value,
        // date: _date.value, message: _message.value, id: v4() });

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
              <Link to='/wishlist' className={styles.wishLink}>CURRENT WISH LIST HERE</Link>.
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