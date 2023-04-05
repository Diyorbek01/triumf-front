import React from "react";
import './Select_date.css'
const Select_name = ({}) => {

    const  data = [
        {id: 1, name:'22.03.2023', },
        { id: 2,name:'23.12.2022', },
        { id: 3, name:'21.03.2012'}
    ]

    return (
        <label  id='select_date'  htmlFor="select">

            <select  id="select">
                { data.map(item=>
                    <option value={item.id} selected={item.id===1?item.name:''}>{item.name}</option>
                ) }
            </select>
        </label>
    );
};
export default Select_name;


