import Head from "../components/Head";
import React, { useState } from 'react';
import './css/Arxiv.css'
import Search from '../components/Search';
import Select_name from '../components/Select_name';
import Select_date from '../components/Select_date';
import images from '../img'

function Arxiv() {

    return(
        <>
            <div className="main">
                <Head text='Arxiv'/>

                <div className="row my-4">
                      <div className="col-md-12 d-flex justify-content-end px-5">
                           <Select_name/>
                          <Select_date/>
                      </div>
                </div>

                <div className="row d-flex align-center">
                    <div className="col-md-4 pl-5">
                          <p id="jami"> Jami: 200  </p>
                          <p id="tolov"> To`lov: 2 000 000 uzs </p>
                    </div>
                     <div className="col-md-8">  <Search btn = {false}/></div>
                </div>

                <div className="row px-4 mt-5">
                      <table className='table'>
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Manzil</th>
                                  <th>F.I.SH</th>
                                  <th>Jo`natuvchi</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                               <tr>
                                   <td>1</td>
                                   <td>Chilonzor t. 24-kvartal, 44/15</td>
                                   <td>Abduvaliyev Davron Normurodovich</td>
                                   <td>Toshkent shaxar issiq suv</td>
                                   <td> Topshirilgan <img  src={images.view} className='mx-5' alt=""/></td>
                               </tr>
                               <tr>
                                   <td>2</td>
                                   <td>Chilonzor t. 24-kvartal, 44/15</td>
                                   <td>Abduvaliyev Davron Normurodovich</td>
                                   <td>Toshkent shaxar issiq suv</td>
                                   <td> Topshirilgan <img  src={images.view} className='mx-5' alt=""/></td>
                               </tr>
                               <tr>
                                   <td>3</td>
                                   <td>Chilonzor t. 24-kvartal, 44/15</td>
                                   <td>Abduvaliyev Davron Normurodovich</td>
                                   <td>Toshkent shaxar issiq suv</td>
                                   <td> Topshirilgan <img  src={images.view} className='mx-5' alt=""/></td>
                               </tr>
                          </tbody>
                      </table>
                </div>

            </div>
        </>
    )
}

export default Arxiv;