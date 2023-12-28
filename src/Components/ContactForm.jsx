import React, { useState } from 'react'
import { gql, GraphQLClient } from 'graphql-request';
function ContactForm() {
    const API_ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isSuccessful, setIsSuccessful ] = useState(null)
    const [ isError, setIsError ] = useState(null);
    const [ error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const graphQLClient = new GraphQLClient(API_ENDPOINT)

            const sendMessageQuery = gql`
                mutation sendMessage($name: String!, $email: String!, $message: String!) {
                    createContactFormResponse(data: { name: $name, email: $email, message: $message }) {
                        name
                        email
                        message
                    }
                }
            `;

            const variables = {
                name,
                email,
                message
            }
            const response = await graphQLClient.request(sendMessageQuery, variables);
            const result = await response;
            setIsSuccessful(true);
            setIsError(null);

        } catch (error) {
            setError(error);
            setIsError(true);
            setIsSuccessful(null);
        }
        
    }

    const resetFormState = () => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSuccessful(null);
        setIsError(null);
        setError(null);
    }

  return (
    <div className="contact_form">
       
            {!isSuccessful && !isError ? (
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
            ): <></>}
            {isSuccessful ? (
                <div className="form_output_message_container success" onClick={resetFormState}>
                    <p className="paragraph text_white">Thank you. The form was successfully submited</p>
                </div>
            ):null}
            {isError ? (
                <div className="form_output_message_container error" onClick={resetFormState}>
                <p className="paragraph text_white">Something went wrong, please try again later.</p>
                </div>
            ):null}     
        
    </div>
  )
}

export default ContactForm