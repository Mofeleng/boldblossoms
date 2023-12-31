import React from 'react'

function PageantInformationSection({ blog_content, pageantName }) {
    if (!blog_content || !blog_content.html) {
        return null;
    }
    console.log(blog_content);
  return (
    <section id="info">
        <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: blog_content.html }}>
              
            </div>
            <div className="content">
                <h4>Apply now</h4>
                <div className="form">
                    <form className='apply_form'>
                        
                        <input type="text"  name='name' placeholder='enter your full name'/>
                        <input type="email" name="email" placeholder='enter your email' />
                        <input type="number" name="phoneNumber" placeholder='enter your phone number' />
                        <input type="text" name='pageant' value={pageantName} />
                        <input type="number" name="age" placeholder='how old are you?' />
                        <button className='btn btn_primary btn_lg'>Submit</button>

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