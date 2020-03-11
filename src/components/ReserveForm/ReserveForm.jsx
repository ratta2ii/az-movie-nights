/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
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
                      <button className={styles.submitButton} type='submit'>Send Reservation</button>
                    </div>

                </form>
            </div>
        </div>
    );
}




export default ReserveForm;