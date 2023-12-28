import React, { useState } from 'react'
import { gql, GraphQLClient } from 'graphql-request';
function ContactForm() {
    const API_ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

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
            console.log(result);
        } catch (error) {
            console.log("something went wrong: ", error)
        }
        
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