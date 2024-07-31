import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeGuest from './components/HomeGuest'
import About from './components/About'
import Terms from './components/Terms'

//https://github.com/LearnWebCode/react-course/blob/master/html-templates/terms.html

function Main() {
   return (
      <BrowserRouter>
         <Header />
            <Routes>
               <Route path='/' element={<HomeGuest />} />
               <Route path='/about-us' element={<About />} />
               <Route path='/terms' element={<Terms />} />
            </Routes>         
         <Footer />
      </BrowserRouter>
   )
}

const root = ReactDom.createRoot(document.querySelector('#app'))
root.render(<Main />)

if (module.hot) {
   module.hot.accept()
}