import React, { useState } from 'react';
import  images from '../img'
import './Admin_item.css'
function Admin_item(props) {

    return(
        <div id="admin_item">
            <img src={images.user_image} alt=""/>
            <p id="name"> {props.name}</p>
            <div id="btn-box">
                 <button id='edit' onClick={props.btn_click}>Tahrirlash</button>
                <button id='delete'> O`chirish </button>
            </div>

        </div>
    )
}

export default Admin_item;