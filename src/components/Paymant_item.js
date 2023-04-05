import React from "react";
import './Payment_item.css'
const Paymant_item = ({isActive,btn_click }) => {


    return (
       <>
           <div id='paymant_item'>
                <div className="box">
                    <p>To`lov miqdori</p>
                    <h1> <span>1 000 000 </span> uzs</h1>
                </div>
                 <div className="btn-box">
                      <button onClick={ btn_click }  style={{
                          display: isActive ? 'block':'none'
                      }}> To`landi </button>
                 </div>
           </div>
       </>
    );
};
export default Paymant_item;