import React, { useState } from 'react'

function ContactForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className="contact_form">
        <form>
            <input type="text" name='name' id='name' placeholder='Name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input type="email" name="email" id="email" placeholder='Email'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <textarea name="message" id="message" placeholder='Message'
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
            >
            </textarea>
            <button className="btn btn_primary btn_lg" onClick={(e) => handleSubmit(e)}>Submit</button>

        </form>
    </div>
  )
}

export default ContactForm