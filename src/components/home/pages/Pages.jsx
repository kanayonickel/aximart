import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Header } from "../../common/Header"
import { Footer } from "../../common/Footer"
import { Home } from "../Home"
import { Details } from '../details/Details'




export const Pages = () => {
  return (
    <Router>
        <Header />
        {/* You should update 'react-router-dom' to v6 by 'npm -i --save react-router-dom@6'. Next, .. router v6 have new syntax, you should using Routes instead of Switch. Also, Routes consist of Route's, and use element instead of component, example:
        <Route path='/' element={<SomeComponent />} /> */}

         <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/cart/:id' element={<Details/>} />
         </Routes>

        <Footer />
    </Router>
  )
}

