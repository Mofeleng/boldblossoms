import React, { useState } from 'react'
import useEmailValidation from '../../Hooks/useEmailValidation'

function PageantInformationSection({ blog_content, pageantName }) {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ age, setAge ] = useState('');
    const [pageant, setPageant] = useState(pageantName);

    const [ isSuccessful, setIsSuccessful ] = useState(null);
    const [nameErr, setNameErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [phoneErr, setPhoneErr ] = useState(null);
    const [ageErr, setAgeErr] = useState(null);

    if (!blog_content || !blog_content.html) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return setNameErr("Please fill in your name");
        }
        if (!email) {
            return setEmailErr("Please fill in your email");
        }
        if (!phoneNumber) {
            return setPhoneErr("Please fill in your phone number");
        }
        if (!age) {
            return setAgeErr("Please fill in your age");
        }

        if (!useEmailValidation(email)) {
            return setEmailErr("Please fill in a valid email");
        }
        
    }
    
  return (
    <section id="info">
        <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: blog_content.html }}>
            </div>
            <div className="content">
                <h4>Apply now</h4>
                <div className="form" id='apply'>
                    <form className='apply_form'>
                        <input type="text"  name='name' placeholder='enter your full name'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameErr(null);
                            }}
                        />
                        <span className="text_red">{nameErr}</span>
                        <input type="email" name="email" placeholder='enter your email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailErr(null);
                            }}
                        />
                        <span className="text_red">{emailErr}</span>
                        <input type="number" name="phoneNumber" placeholder='enter your phone number'
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                                setPhoneErr(null);
                            }}
                        />
                        <span className="text_red">{phoneErr}</span>
                        <input type="text" name='pageant' value={pageantName} />
                        <input type="number" name="age" placeholder='how old are you?'
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                setAgeErr(null);
                            }}
                        />
                        <span className="text_red">{ageErr}</span>
                        <button className='btn btn_primary btn_lg' onClick={(e) => handleSubmit(e)}>Submit</button>

                    </form>
                    <div className="more_info">
                        <p className='paragraph'>For your application to be considered you are required to pay R50 Non Refundable registration fee.</p>
                        <p className='paragraph'>
                            Banking details:
                            Capitec
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageantInformationSection