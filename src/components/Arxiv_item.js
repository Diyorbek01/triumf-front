import React from "react";
import './Arxiv_item.css'
import images from '../img'
const Circle_progresbar = ({soni, sanasi}) => {


    return (
        <div id='arxiv-item'>
                <div id="img-box">
                    <img src={images.arxiv_logo} alt=""/>
                </div>
            <div id="main-text">
                  <h4> {soni} </h4>
                <p>  <span>yuklangan sanasi:</span>
                       <span>{sanasi} </span>
                </p>
            </div>
            
            <div id="btn-box">
                <button>Faylni yuklash</button>
                <button> Ro`yxatni ochish</button>
            </div>
        </div>
    );
};
export default Circle_progresbar;