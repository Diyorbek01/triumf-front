import {useState} from "react";
import * as React from 'react';
import './css/Tashkilot2.css'
import Head from "../components/Head";
import images from "../img"
import Select_name from "../components/Select_name";
import '../font/css/all.min.css';
import  Search from '../components/Search';
export function Tashkilot1() {

    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    let  class_ = {}
    return (
        <>
            <div className="main">
                <Head text='Tashkilot'/>
                <div  id="right">
                        <Select_name/>
                </div>

                <div className="row d-flex justify-content-end my-5">
                    <Search  text='PDF file yuklash'  btn={true} >
                        <img src={images.upload_down} alt=""/>
                    </Search>

                </div>

                <div className="row px-4">
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Manzil</th>
                            <th>F.I.SH</th>
                            <th>Jo`natuvchi</th>
                            <th><input width='10px' type="checkbox" id='all_check'/> <label
                                htmlFor="all_check"> Hammasini belgilash</label></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Chilonzor t. 24-kvartal, 44/15</td>
                            <td>Abduvaliyev Davron Normurodovich</td>
                            <td>Toshkent shaxar issiq suv</td>
                            <td><input type="checkbox"/> </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Chilonzor t. 24-kvartal, 44/15</td>
                            <td>Abduvaliyev Davron Normurodovich</td>
                            <td>Toshkent shaxar issiq suv</td>
                            <td><input type="checkbox"/> </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Chilonzor t. 24-kvartal, 44/15</td>
                            <td>Abduvaliyev Davron Normurodovich</td>
                            <td>Toshkent shaxar issiq suv</td>
                            <td><input type="checkbox"/> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Tashkilot1;