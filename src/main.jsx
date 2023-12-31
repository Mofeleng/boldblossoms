import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Layout from './Layout'
import Blogs from './Pages/Blogs'
import Pageants from './Pages/Pageants'
import Pageant from './Pages/Pageant'
import Contestants from './Pages/Contestants'
import Contestant from './Pages/Contestant'
import Partners from './Pages/Partners'
import Contact from './Pages/Contact'
import Results from './Pages/Results'
import Blog from './Pages/Blog'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/blogs' element={
          <Layout>
            <Blogs />
          </Layout>
        } />
        <Route path='/pageants' element={
          <Layout>
            <Pageants />
          </Layout>
        } />
        <Route path='/pageant/:slug' element={
          <Layout>
            <Pageant />
          </Layout>
        } />
        <Route path='/apply/:slug' element={
            <Layout>
              <Register />
            </Layout>
        } />
        <Route path='/contestants' element={
          <Layout>
            <Contestants />
          </Layout>
        } />

        <Route path='/contestant/:id' element={
          <Layout>
            <Contestant />
          </Layout>
        } />

          <Route path='/partners' element={
            <Layout>
              <Partners />
            </Layout>
        } />

        <Route path='/contact' element={
          <Layout>
            <Contact />
          </Layout>
        } />

        <Route path='/blog/:slug' element={
          <Layout>
            <Blog />
          </Layout>
        } />

        <Route path='/results' element={
          <Layout>
            <Results />
          </Layout>
        } />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
