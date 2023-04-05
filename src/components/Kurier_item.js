import React from "react";
import './Kurier_item.css';
import images from '../img';
import '../font/css/all.min.css'
const Kurier_item = ({name, img,kurier_change,btn1_click,btn2_click }) => {


    return (
        <>
            <div id='kurier_item'>
                <img onClick={kurier_change} src={img!==null?img:images.raj} />
                <div id="text">
                     <h3> {name} </h3>
                      <div id="rating" className='d-flex justify-content-between px-2'>
                          <span> <i className="fa-solid fa-envelope text-secondary"></i> 1k </span>
                          <span><i className="fa-solid fa-car text-secondary"></i></span>
                      </div>
                </div>
                <div id="btn-box">
                    <button onClick={btn1_click}  id='xat_berish'>Xat berish</button>
                    <button onClick={btn2_click} id='profil'> Profil </button>
                </div>
            </div>
        </>
    );
};
export default Kurier_item;