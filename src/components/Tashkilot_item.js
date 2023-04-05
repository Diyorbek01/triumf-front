import React, { useState } from 'react';
import './Tashkilot_item.css'
import  images from '../img'
function Tashkilot_item(props) {

    return(
        <>
             <div className="tash_item">
                 <div className="img-box" onClick={props.box_click}>
                     <img src={images.tashkilot_} alt=""/>
                 </div>
                 <h1 className='text' >{props.text}</h1>
                    <div className="btn-box">
                         <button id='royxat' onClick={ props.btn1_click }>Ro`yxat</button>
                         <button id='edit' onClick={props.btn2_click} value={props.id}> O`zgartirish {props.id}</button>
                    </div>
             </div>
        </>
    )
}

export default Tashkilot_item;

