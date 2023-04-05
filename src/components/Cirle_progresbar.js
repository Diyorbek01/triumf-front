import React from "react";
import Button_add from "./Button_add";
import './Circle_progresbar.css'
import Button from "./Button_add";
const Circle_progresbar = ({foiz, children }) => {

    const numbers = document.querySelectorAll('.number');
    const svgEl = document.querySelectorAll('svg circle');

    const counters = Array(numbers.length);
    const intervals = Array(counters.length);
    counters.fill(0);

    numbers.forEach((number, index) => {
        intervals[index] = setInterval(() => {
            if(counters[index] === parseInt(number.dataset.num)){
                clearInterval(counters[index]);
            }else{
                counters[index] += 1;
                number.innerHTML = counters[index] + "%";
                svgEl[index].style.strokeDashoffset = Math.floor(672 - 680 * parseFloat(number.dataset.num / 100));
            }
        }, 20);
    });

    return (
       <div id='left'>
           <div className="skill-container">
               <div className="skill">
                   <div className="outer">
                       <div className="inner">
                           <div className="number" data-num={foiz}>
                           </div>
                       </div>
                   </div>

                   <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                       <defs>
                           <linearGradient id="GradientColor">
                               <stop offset="0%" stop-color="#e91e63"/>
                               <stop offset="100%" stop-color="#673ab7"/>
                           </linearGradient>
                       </defs>
                       <circle cx="120" cy="120" r="110" stroke-linecap="round"/>
                   </svg>
               </div>

           </div>
           <div id="box">
               <div id="text">
                   <p id="jami">Jami xatlat: <b>1000</b></p>
                   <p id="berilgan">Yetkazib berilgan: <b>977</b></p>
               </div>
               <Button_add title='Ro`yxatni ochish'/>
           </div>
       </div>
    );
};
export default Circle_progresbar;