import React, { useState } from 'react';
import {Link,Route,Routes } from "react-router-dom";
import './App1.css'
import Admin_qoshish from './pages/Admin_qoshish'
import Arxiv from './pages/Arxiv'
import Kurier from './pages/Kurier'
import Kurier1 from './pages/Kurier1'
import Kurier2 from './pages/Kurier2'
import Statistika from './pages/Statistika'
import Tashkilot from './pages/Tashkilot'
import Tashkilot1 from './pages/Tashkilot1'
import Tashkilot2 from './pages/Tashkilot2'
import Tushumlar from './pages/Tushumlar'
import images from './img'
import {NavLink } from "react-router-dom";
const App1 = () => {
    return (
        <>
            <header>
                <img id='logo' src={images.triumf} alt=""/>
                <ul id='nav'>
                   <li>  <NavLink to="/" > <img src={images.tashkilot} alt=""/> Tashkilot</NavLink> </li>
                    <li> <NavLink to="/kurier"> <img src={images.kurier} alt=""/> Kurierlar</NavLink></li>
                    <li> <NavLink to="/statistika"><img src={images.statistika} alt=""/> Statistika</NavLink></li>
                    <li> <NavLink to="/tushumlar"><img src={images.tushum} alt=""/> Tushumlar</NavLink></li>
                    <li> <NavLink to="/arxiv"> <img src={images.arxiv} alt=""/> Arxiv</NavLink> </li>
                   <li>  <NavLink to="/admin-qoshish"><img src={images.admin} alt=""/> <span>Admin qo`shish</span></NavLink></li>
                </ul>
            </header>
        <Routes>
              <Route path='/' element={ <Tashkilot/>  }/>
              <Route path='/kurier' element={ <Kurier/> }/>
              <Route path='/kurier1' element={ <Kurier1/> }/>
              <Route path='/kurier2' element={ <Kurier2/> }/>
              <Route path='/statistika' element={ <Statistika/> }/>
              <Route path='/tushumlar' element={ <Tushumlar/> }/>
              <Route path='/arxiv' element={ <Arxiv/> }/>
              <Route path='/admin-qoshish' element={ <Admin_qoshish/> }/>
               <Route path="/tashkilot1" element={<Tashkilot1 />} />
               <Route path="/tashkilot2" element={<Tashkilot2/>} />
        </Routes>
        </>
    )
}

export default App1;