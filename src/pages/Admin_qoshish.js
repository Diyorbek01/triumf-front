
import React, {useEffect, useState} from 'react';
import './css/Admin_qoshish.css'
import Head from "../components/Head";
import Admin_item from "../components/Admin_item";
import Search from "../components/Search";
import Modal from "../components/Modal";
import images from "../img";
import './css/Kurier.css'
const  URL = "https://triumf.pythonanywhere.com/api/v1/dashboard/";
function Admin_qoshish() {

    const [isOpen,setisOpen] = useState(false)
    const [isOpen1,setisOpen1] = useState(false)

    const handleClick = ()=> setisOpen(true)
    const handleClick1 = ()=> setisOpen1(true)
    const handleClose = ()=> setisOpen(false)
    const handleClose1 = ()=> setisOpen1(false)

    const  [show_pass,setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!show_pass);

    const [admin,setAdmin] = useState([])

    useEffect(()=>{
        fetch(`${URL}/admins`,{
            method: 'GET',
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4NTQ4NzAyLCJleHAiOjE2ODQ1OTY3MDIsImp0aSI6Ijc3NWQ0ODNlLWVhODMtNDI0Yy1hNTUyLTFjZTYwNWFiN2Y5OCIsInVzZXJfaWQiOjEsIm9yaWdfaWF0IjoxNjc4NTQ4NzAyfQ.2GVVmnhp2oSnPhd-DwdzQaUAu9A0pL5iKMQMP6CHaIU"}
        })
            .then((response)=>response.json())
            .then((data)=>{
                setAdmin(data)
            })
    },[URL])

    return(
        <>
            <div className="main">

                <Modal isOpen={isOpen} onClose={handleClose}>
                    <div id='child_modal'>
                        <form action="">
                            <div id="head-box">
                                <h1>Admin qo`shish</h1>
                                <div id="img-box" style={{ width:'120px', height:'120px',background:'white'   }} onClick={ handleClick }>
                                    <img src={images.user_image} width='100%' />
                                </div>

                            </div>

                            <div id="input-group">
                                <div id="form-group">
                                    <input type="text" placeholder='Admin nomi'/>
                             </div>
                                <div id="form-group">
                                    <input type="number" placeholder='Telefon raqami'/>
                                </div>
                                <div id="form-group">
                                    <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                    <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                                </div>

                                <div id="form-group">
                                    <input type="checkbox" id="switch"
                                           className="checkbox"/>
                                    <label htmlFor="switch" className="toggle">
                                        <h3 id='check'>
                                            <span>Aktiv</span>
                                            <span>Noaktiv</span>
                                        </h3>  </label>
                                </div>
                                <div id="checkbox-group">
                                     <label htmlFor="tashkilot">  <input type="checkbox" id='tashkilot'/>  Tashkilotlar </label>
                                     <label htmlFor="kurier">  <input type="checkbox" id='kurier'/>  Kurierlar </label>
                                     <label htmlFor="statistika">  <input type="checkbox" id='statistika'/>  Statistika </label>
                                     <label htmlFor="tushumlar">  <input type="checkbox" id='tushumlar'/>  Tushumlar </label>
                                     <label htmlFor="arxiv">  <input type="checkbox" id='arxiv'/>  Arxiv </label>
                                     <label htmlFor="admin_qoshish">  <input type="checkbox" id='admin_qoshish'/>  Admin qo`shish </label>
                                </div>

                                <div id="btn-box">
                                    <button type='submit' id='add'> Davom etish </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </Modal>
                <Modal isOpen={isOpen1} onClose={handleClose1}>
                    <div id='child_modal'>
                        <form action="">
                            <div id="head-box">
                                <h1>Malumotlarni O`zgartirish</h1>
                                <div id="img-box" style={{ width:'120px', height:'120px',background:'white'   }} onClick={ handleClick }>
                                    <img src={images.user_image} width='100%' />
                                </div>
                            </div>

                            <div id="input-group">
                                <div id="form-group">
                                    <input type="text" placeholder='Admin nomi'/>
                             </div>
                                <div id="form-group">
                                    <input type="number" placeholder='Telefon raqami'/>
                                </div>
                                <div id="form-group">
                                    <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                    <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                                </div>

                                <div id="form-group">
                                    <input type="checkbox" id="switch"
                                           className="checkbox"/>
                                    <label htmlFor="switch" className="toggle">
                                        <h3 id='check'>
                                            <span>Aktiv</span>
                                            <span>Noaktiv</span>
                                        </h3>  </label>
                                </div>
                                <div id="checkbox-group">
                                     <label htmlFor="tashkilot">  <input type="checkbox" id='tashkilot'/>  Tashkilotlar </label>
                                     <label htmlFor="kurier">  <input type="checkbox" id='kurier'/>  Kurierlar </label>
                                     <label htmlFor="statistika">  <input type="checkbox" id='statistika'/>  Statistika </label>
                                     <label htmlFor="tushumlar">  <input type="checkbox" id='tushumlar'/>  Tushumlar </label>
                                     <label htmlFor="arxiv">  <input type="checkbox" id='arxiv'/>  Arxiv </label>
                                     <label htmlFor="admin_qoshish">  <input type="checkbox" id='admin_qoshish'/>  Admin qo`shish </label>
                                </div>

                                <div id="btn-box">
                                    <button type='submit' id='add'> Davom etish </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </Modal>

                <Head text='Admin qo`shish'/>

                <div className="row d-flex justify-content-end ">
                    <Search  btn={true} text='Admin qo`shish' btn_click = {handleClick}/>
                </div>
                <div className="row pl-5">
                    {
                        admin.map((item,index)=>{
                            return(
                                <Admin_item name={item.full_name} btn_click = {handleClick1} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Admin_qoshish;

