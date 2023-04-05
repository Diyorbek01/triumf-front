import Head from "../components/Head";
import './css/Kurier.css'
import Kurier_item from '../components/Kurier_item'
import Search from '../components/Search'
import React, { useState,useRef,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import images from "../img";
const  URL = "https://triumf.pythonanywhere.com/api/v1/dashboard/";

function Kurier() {

    const inputRef = useRef(null);
    let navigate = useNavigate();
    const routeChange1 = () =>{
        let path = `/kurier1`;
        navigate(path);
    }

    const routeChange2 = () =>{
        let path = `/kurier2`;
        navigate(path);
    }

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const [isOpen1, setIsOpen1] = useState(false);
    const handleOpen1 = () => setIsOpen1(true);
    const handleClose1 = () => setIsOpen1(false);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        age: ""
    });

    const  [show_pass,setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!show_pass);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            name: "",
            surname: "",
            age: ""
        })
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        setSelectedImage(event.target.files[0])
        if (!fileObj) {
            return;
        }
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
            setFilePath(true)
            console.log(selectedImage);
        }
    }, [selectedImage]);

    const  [file_path, setFilePath]= useState(false)


    const [kurier,setKurier] = useState([])
    useEffect(()=>{
        fetch(`${URL}/couriers`,{
            method: 'GET',
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4NTQ4NzAyLCJleHAiOjE2ODQ1OTY3MDIsImp0aSI6Ijc3NWQ0ODNlLWVhODMtNDI0Yy1hNTUyLTFjZTYwNWFiN2Y5OCIsInVzZXJfaWQiOjEsIm9yaWdfaWF0IjoxNjc4NTQ4NzAyfQ.2GVVmnhp2oSnPhd-DwdzQaUAu9A0pL5iKMQMP6CHaIU"}
        })
            .then((response)=>response.json())
            .then((data)=>{
                setKurier(data)
            })
    },[URL])

    return(
        <>
            <div className="main">

                <Modal isOpen={isOpen} onClose={handleClose}>
                    <div id='child_modal'>
                        <form action="">
                            <div id="head-box">
                                <h1>Kurier yaratish</h1>
                                <div id="img-box1" onClick={ handleClick }>
                                    <img src={images.upload_image} style={{ display: !file_path?'block':'none'}}/>
                                    <img id='show_image' src={imageUrl} style={{ display:file_path?'block':'none'}}/>
                                </div>

                                <input ref={inputRef} onChange={handleFileChange} type="file" id='get_image' accept="image/*"/>
                            </div>

                            <div id="input-group">
                                <div id="form-group">
                                    <input type="text" placeholder='F.I.SH'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='JSHR'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='Telefon raqami'/>
                                </div>
                                <div id="form-group">
                                    <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                    <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                                </div>

                                <div id="form-group">
                                    <div className="radio"
                                         data-toggle="buttons">
                                        <label className="btn">
                                            <input type="radio" name="button" id="button1" />  Piyoda  </label>

                                        <label className="btn active">
                                            <input type="radio" name="button"
                                                   id="button2"/>
                                                Velosiped
                                        </label>

                                        <label className="btn">
                                            <input type="radio" name="button"
                                                   id="button3"/>
                                                Mashina
                                        </label>
                                    </div>
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



                                <div id="btn-box">
                                    <button type='submit' id='add'> Davom etish </button>
                                </div>
                                <div id="btn-box">
                                    <button id='delete'> O`chirish </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </Modal>
                <Modal isOpen={isOpen1} onClose={handleClose1}>
                    <div id='child_modal'>
                        <form action="">
                            <div id="head-box">
                                <h1>Kurier yaratish</h1>
                                <div id="img-box1" onClick={ handleClick }>
                                    <img src={images.upload_image} style={{ display: !file_path?'block':'none'}}/>
                                    <img id='show_image' src={imageUrl} style={{ display:file_path?'block':'none'}}/>
                                </div>

                                <input ref={inputRef} onChange={handleFileChange} type="file" id='get_image' accept="image/*"/>
                            </div>

                            <div id="input-group">
                                <div id="form-group">
                                    <input type="text" placeholder='F.I.SH'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='JSHR'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='Telefon raqami'/>
                                </div>
                                <div id="form-group">
                                    <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                    <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                                </div>

                                <div id="form-group">
                                    <div className="radio"
                                         data-toggle="buttons">
                                        <label className="btn">
                                            <input type="radio" name="button" id="button1" />  Piyoda  </label>

                                        <label className="btn active">
                                            <input type="radio" name="button"
                                                   id="button2"/>
                                                Velosiped
                                        </label>

                                        <label className="btn">
                                            <input type="radio" name="button"
                                                   id="button3"/>
                                                Mashina
                                        </label>
                                    </div>
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



                                <div id="btn-box">
                                    <button type='submit' id='add'> Davom etish </button>
                                </div>
                                <div id="btn-box">
                                    <button id='delete'> O`chirish </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </Modal>

                <Head text='Kurierlar'/>

                <div className="row d-flex justify-content-end">
                    <Search  text='Kurier qo`shish' btn={true} btn_click = {handleOpen} >
                    </Search>
                </div>

                <div className="row pl-5">
                    {
                        kurier.map((item,index)=>{
                            return(
                                <Kurier_item img={item.avatar} key={index}  kurier_change = { routeChange1 }   btn2_click = { handleOpen1 } name={item.full_name} />
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Kurier;