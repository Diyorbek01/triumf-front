import React from "react";
import './Select_name.css'
const Select_name = ({}) => {

    const  data = [
        {id: 1, name:'Toshkent shaxar issiq suv Toshkent shaxar issiq suv', },
        { id: 2,name:'name 2', },
        { id: 3, name:'name 3'}
    ]

    return (
        <label  id='select_name'  htmlFor="select">
            <select  id="select">
                { data.map(item=>
                    <option value={item.id} selected={item.id===1?item.name:''}>{item.name}</option>
                ) }
            </select>
        </label>
    );
};
export default Select_name;