import Head from "../components/Head";
import React, { useState } from 'react';
import './css/Kurier2.css'
import Search from '../components/Search'
function Kurier() {


    return(
        <>
            <div className="main">
                <Head text='Kurierlar'/>

                <div className="row d-flex justify-content-end">
                    <Search  text='Tashkilot qo`shish' btn={false} >
                    </Search>
                </div>

            </div>
        </>
    )
}

export default Kurier;