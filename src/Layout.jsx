import React from 'react'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

function Layout({ children }) {
  return (
    <div>
    <NavigationBar />
    {children}
    <Footer />
  </div>
  )
}

export default Layout