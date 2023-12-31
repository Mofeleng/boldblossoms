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
import BlogsPage from './Pages/BlogsPage'
import PageantsPage from './Pages/PageantsPage'
import PageantPage from './Pages/PageantPage'
import ContestantsPage from './Pages/ContestantsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path='/login' element={
          <Layout>
            <LoginPage />
          </Layout>
        } />
        <Route path='/blogs' element={
          <Layout>
            <BlogsPage />
          </Layout>
        } />
        <Route path='/pageants' element={
          <Layout>
            <PageantsPage />
          </Layout>
        } />
        <Route path='/pageant/:slug' element={
          <Layout>
            <PageantPage />
          </Layout>
        } />
        <Route path='/apply/:slug' element={
            <Layout>
              <RegisterPage />
            </Layout>
        } />
        <Route path='/contestants' element={
          <Layout>
            <ContestantsPage />
          </Layout>
        } />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
