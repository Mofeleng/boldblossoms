import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import Layout from './Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path='/apply' element={
        <Layout>
          <RegisterPage />
        </Layout>
        } />
        <Route path='/login' element={
          <Layout>
            <LoginPage />
          </Layout>
        } />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
