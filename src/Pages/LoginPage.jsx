import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import LoginForm from '../Components/Login/LoginForm'
import Footer from '../Components/Footer'

function LoginPage() {
  return (
    <>
    <NavigationBar />
        <SolidBGHeroTemplate
            label={"Login"}
            heading={"Welcome back: Log in to continue blossoming"}
            paragraph={`It's always a pleasure to see you here, we hope you are thriving!`}
        />
        <LoginForm />
    <Footer />
    </>
  )
}

export default LoginPage