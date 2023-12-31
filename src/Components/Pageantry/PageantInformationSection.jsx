import React, { useState } from 'react'
import useEmailValidation from '../../Hooks/useEmailValidation'
import { GraphQLClient, gql } from 'graphql-request';

function PageantInformationSection({ blog_content, pageantName }) {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ age, setAge ] = useState('');
    const [pageant, setPageant] = useState(pageantName);

    const [ isSuccessful, setIsSuccessful ] = useState(null);
    const [ isError, setIsError ] = useState(null);

    const [nameErr, setNameErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [phoneErr, setPhoneErr ] = useState(null);
    const [ageErr, setAgeErr] = useState(null);

    
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    if (!blog_content || !blog_content.html) {
        return null;
    }

    const handleSubmit = async (e) => {
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

        try {
            const graphQLClient = new GraphQLClient(ENDPOINT);

            const mutation = gql`
                mutation MyMutation($name: String!, $email: String!, $pageantAppliedFor: String!, $phone: String!, $age: String!) {
                    createPageantApplication(
                        data: {name: $name, email: $email, phoneNumber: $phone, age: $age, pageantAppliedFor: $pageantAppliedFor}
                    ) {
                        age
                        name
                        phoneNumber
                        pageantAppliedFor
                    }
                    }
            `;

            const variables = {
                name,
                email,
                pageantAppliedFor: pageantName,
                phone: phoneNumber,
                age
            }

            const response = await graphQLClient.request(mutation, variables);
            const result = await response;
            setIsError(null);
            setIsSuccessful(true);

        } catch (error) {
            setIsError("Something went wrong try again.")
            setIsSuccessful(null)
        }
        
    }

    const resetFormState = () => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setAge("")
        setIsSuccessful(null);
        setIsError(null);
        setIsError(null);
    }
    
  return (
    <section id="info">
        <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: blog_content.html }}>
            </div>
            <div className="content">
                <h4>Apply now</h4>
                {!isSuccessful && !isError ? (
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
                ): <></>}

                { isSuccessful ? (
                    <div className="form_output_message_container success" onClick={resetFormState}>
                        <p className="paragraph text_white">Thank you. The form was successfully submited</p>
                    </div>
                ): null}
                { isError ? (
                    <div className="form_output_message_container error" onClick={resetFormState}>
                        <p className="paragraph text_white">Something went wrong, please try again later.</p>
                    </div>
                ): null}
                
            </div>
        </div>
    </section>
  )
}

export default PageantInformationSection