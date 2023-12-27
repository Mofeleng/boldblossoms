import React from 'react'

function LoginForm() {
  return (
    <section id="login">
        <div className="container">
            <form className='apply_form'>
                <h3 className="heading_smaller">Login</h3>
                <input type="text" placeholder='First name' />
                <input type="password" placeholder='Password' />

                <div className="margin_top_md">
                    <button className="btn btn_primary btn_lg">Log in</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default LoginForm