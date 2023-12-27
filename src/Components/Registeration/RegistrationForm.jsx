import React from 'react'
import CustomFileUpload from './CustomFileUpload'

function RegistrationForm() {
  return (
    <section id="register">
        <div className="container">
            <form className='apply_form'>
                <h3 className="heading_smaller">Personal information</h3>
                <input type="text" placeholder='Full name'/>
                <label>Date of Birth</label>
                <input type="date" placeholder='Your date of birth'/>
                <input type="number" placeholder='Phone number' />
                <input type="email" placeholder='Email address' />

                <h3 className="heading_smaller">Address</h3>
                <input type="text" placeholder='Street address'/>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Province'/>
                <input type="number" placeholder='Postal code'/>

                <h3 className="heading_smaller">Pageant specific information</h3>
                <textarea className='textarea_smaller' placeholder='Why do you want to participate in Bold Blossoms Pageant?'></textarea>
                <textarea className='textarea_smaller' placeholder='Have you participated in any pageants or similar events before? If yes, please provide details.'></textarea>
                <textarea className='textarea_smaller' placeholder="Talent Showcase: If you have a talent you'd like to showcase, please provide details."></textarea>
                <input type="text" placeholder='Social media handles(Optional) ex: Facebook: John Doe, Instagram: @johndoe, Twitter: Johdoe' />                
                
                <h3 className="heading_smaller">Terms and conditions</h3>
                <input type="checkbox" name='t_n_c' className='checkbox'/>
                <label htmlFor="t_n_c"> I have read and agree to the Terms and Conditions of the Bold Blossoms Pageant.</label><br />
                <input type="checkbox" name='media_consent' className='checkbox'/>
                <label htmlFor="media_consent"> I hereby give my consent for the use of my name, likeness, and images for promotional purposes related to the Bold Blossoms Pageant.</label>

                <h3 className="heading_smaller">Upload Image</h3>
                <label>Please upload a recent headshot</label>
                <CustomFileUpload />    
                <div className="margin_top_lg">
                <button className="btn btn_primary btn_lg">Submit application</button>
                </div>
                <p>
                    <a href="/login">Already registered? Log in instead</a>
                </p>
            </form>
        </div>
    </section>
  )
}

export default RegistrationForm