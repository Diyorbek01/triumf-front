import React from "react";
const Button = ({title, children,btn_click}) => {

    const handleClick = () => {

    };

    return (
       <button style={{
           background: '#7745E0',
           borderRadius: '10px',
           padding:'13px 43px',
           display:'flex',
           alignItems: 'center',
           justifyContent: 'center',
           fontFamily: 'Mail Sans Roman',
           fontStyle: 'normal',
           fontWeight: '500',
           fontSize: '18px',
           lineHeight: '22px',
           color:'white',
           border:'none'
       }} onClick={btn_click}>
           {children} {title}
       </button>
    );
};
export default Button;