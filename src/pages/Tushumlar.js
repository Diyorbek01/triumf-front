import Head from "../components/Head";
import React, { useState } from 'react';
import './css/Tushumlar.css'
import Select_name from "../components/Select_name";
import Select_date from "../components/Select_date";
import Paymant_item from "../components/Paymant_item";
function Tushumlar() {

    const [isActive,setIsActive] = useState(true)
    const click=()=>{
       setIsActive(false)
    }

    return(
        <>
            <div className="main">
                <Head text='Tushumlar'/>
                <div className="row d-flex justify-content-end px-5">
                    <Select_name className="px-4"/>
                    <Select_date/>
                </div>

                <div className="container-fluid p-5">
                     <div className="row">
                         <Paymant_item  isActive={isActive} btn_click = { click }/>
                     </div>
                    <div className="row">
                        <Paymant_item  isActive={isActive}/>
                    </div>
                    <div className="row">
                        <Paymant_item  isActive={isActive}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Tushumlar;