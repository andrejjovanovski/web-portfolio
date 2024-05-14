import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import addNotification from 'react-push-notification';


export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();
    // const nameInput = useRef("")
    // const emailInput

    const sendEmail = (e) => {
        e.preventDefault();

        let validationErrors = validateForm()


        if (validationErrors) {
            return
        } else {
            emailjs
                .sendForm('service_xob3rxa', 'template_x1te6zf', form.current, {
                    publicKey: 'tZw3OXwhBeV2uSFSx',
                })
                .then(
                    () => {

                        setName("")
                        setEmail("")
                        setMessage("")

                        console.log(e)

                        addNotification({
                            title: 'Form Validation',
                            subtitle: 'You message has been succesffully sent',
                            theme: 'darkblue'
                        })
                    },
                    (error) => {
                        addNotification({
                            title: 'Form Validation',
                            subtitle: 'Try again! There was an error submiting your message.',
                            theme: 'darkblue'
                        })
                    },
                );
        }
    };


    const validateForm = (e) => {

        let nameError = ''
        let emailError = ''
        let messageError = ''

        const printNameError = document.querySelector('.name-error')
        const printEmailError = document.querySelector('.email-error')
        const printMessageError = document.querySelector('.message-error')


        if (name.length == 0) {
            nameError = `* Field can not be empty`
            printNameError.innerHTML = nameError
        } else {
            printNameError.innerHTML = ''
        }

        if (email.length == 0) {
            emailError = `* Field can not be empty`
            printEmailError.innerHTML = emailError
        } else {
            printEmailError.innerHTML = ''
        }

        if (message.length == 0) {
            messageError = ` *Field can not be empty`
            printMessageError.innerHTML = messageError
        } else {
            printMessageError.innerHTML = ''
        }

        let errorMessages = [nameError, emailError, messageError]

        if (nameError != '' || emailError != '' || messageError != '') {
            return errorMessages
        }
    }

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline-block border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - andrejjovanovski17@gmail.com</p>
                </div>
                <input type="text" placeholder='Name' name='name' value={name} className='p-2 bg-[#ccd6f6]' onChange={(e) => setName(e.target.value)} />
                <small className='name-error text-red-600'></small>
                <input type="email" placeholder='Email' name='email' value={email} className='mt-4 p-2 bg-[#ccd6f6]' onChange={(e) => setEmail(e.target.value)} />
                <small className='email-error text-red-600 mb-4'></small>
                <textarea name="message" placeholder='Message..' rows='10' value={message} className='p-2 bg-[#ccd6f6]' onChange={(e) => setMessage(e.target.value)}></textarea>
                <small className='message-error text-red-600'></small>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's colaborate</button>
            </form>
        </div>
    )
}

export default Contact