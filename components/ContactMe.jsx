import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import contactImage from '../img/email.png';
import Button from '@mui/material/Button'

import styles from '../styles/ContactStyle.module.css';
import { style } from '@mui/system';


function ContactMe() {

    const localMessage = (JSON.parse(localStorage.getItem('contact-message')));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [pastMessage, setPastMessages] = useState(
        localMessage || [] );

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('contact-message', JSON.stringify({
                name,
                email,
                message,
                date: new Date(),
            }))
        setPastMessages(JSON.parse(localStorage.getItem('contact-message')) || [])
        } catch (err) {
            console.log(err);
        }
        
    }

    // useEffect(() => {
    //     // Fetch the user data from the localStorage and set it to the local state pastMessages

    //     try {
    //         const contactMessages = localStorage.getItem('contact-message');

    //         if (!contactMessages) {
    //             setPastMessages(null)
    //         } else {
    //             const parseData = JSON.parse(contactMessages);
    //             setPastMessages(parseData);
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         setPastMessages(null);
    //     }

         
    // }, [])

    return (
        <div className={styles.bgWrap}>
            <Image 
                alt='backgroundImage'
                src={contactImage}
                layout='fill'
                objectFit='cover'
                quality={100}
                style={{filter: 'brightness(0.7)'}}
            />
            <div className={styles.bgText}>
                <h1>CONTACT US</h1>
                {/* save this message in local storage and read it onClick */}
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input type="text" placeholder='Name' required onChange={(e) => {setName(e.target.value)}}/>
                    <input type="email" placeholder='Your Email' required onChange={(e) => {setEmail(e.target.value)}}/>
                    <textarea placeholder='Write Here...' name='message' onChange={(e) => {setMessage(e.target.value)}}></textarea>
                    <Button 
                        color='error'
                        variant="contained" 
                        size="large" 
                        type='Submit'
                    >Send</Button>
                </form>

                {pastMessage ? (
                    <div className={styles.messageContainer}>
                        <h2>LAST MESSAGE: </h2>
                        <p className={styles.p}>Name: <span className={styles.span}>{pastMessage.name}</span></p>
                        <p className={styles.p}>Email: <span className={styles.span}>{pastMessage.email}</span></p>
                        <p className={styles.p}>Message: <span className={styles.span}>{pastMessage.message}</span></p>
                        <p className={styles.p}>Date: <span className={styles.span}>{pastMessage.date}</span></p>
                    </div>
                ): (<h2 style={{color: 'white'}}>No messages</h2>)
                }
            </div>
            

        </div>
    )
}

export default ContactMe;