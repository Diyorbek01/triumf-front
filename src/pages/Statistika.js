import Head from "../components/Head";
import React, { useState } from 'react';
import './css/Statistika.css'
import Select_name from "../components/Select_name";
import Select_date from "../components/Select_date";
import Cirle_progresbar from "../components/Cirle_progresbar";
import Paymant_item from "../components/Paymant_item";
import {click} from "@testing-library/user-event/dist/click";

function Statistika() {



    return(
        <>
            <div className="main">
                <Head text='Statistika'/>
                <div className="row d-flex justify-content-end px-5">
                       <Select_name className="px-4"/>
                    <Select_date/>
                </div>

                <div className="container-fluid pl-4">
                     <div className="row">
                          <p id="sana">  Yanvar  </p>
                     </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Cirle_progresbar foiz='20'/>
                        </div>
                        <div className="col-md-6">
                             <Paymant_item />
                        </div>

                    </div>

                    <div className="row">
                        <p id="sana">  Fevral  </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Cirle_progresbar foiz='20'/>
                        </div>
                        <div className="col-md-6">
                            <Paymant_item/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Statistika;