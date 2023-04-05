import React, { useState } from 'react';
import './Search.css'
import  images from '../img'
function Search({text,children,btn,btn_click}) {

    return(
        <>
            <div className='search-box'>

                  <div className="search">
                      <input type="text" placeholder="Qidirish"/>
                       <button><img src={images.search} alt=""/> </button>
                  </div>
                <button onClick={btn_click} style={{
                    display: btn?'block':'none'
                }} id='qoshish'> {children} {text} </button>
            </div>

        </>
    )
}

export default Search;