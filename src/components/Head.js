import React, { useState } from 'react';
import './Head.css'
import  images from '../img'
function Head(props) {

    return(
        <>
            <div className='head'>
                <h1>{props.text}</h1>
                <img src={images.jiring} alt=""/>
            </div>
            <hr/>
        </>
    )
}

export default Head;