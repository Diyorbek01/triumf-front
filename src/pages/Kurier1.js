import Head from "../components/Head";
import React, {useEffect, useRef, useState} from 'react';
import './css/Kurier1.css'
import './css/Kurier.css'
import Search from '../components/Search'
import images from "../img";
import Button_add from "../components/Button_add";
import TabNavItem from "../components/TabNavItem";
import TabContent from "../components/TabContent";
import Cirle_progresbar from "../components/Cirle_progresbar";
import Paymant_item from "../components/Paymant_item";
import Arxiv_item from "../components/Arxiv_item";
import Modal from "../components/Modal";
function Kurier() {

    const inputRef = useRef(null);

    const [activeTab, setActiveTab] = useState("tab1");
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
        // 👇️ open file input box on click of another element
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



    return(
        <>
            <div className="main">

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


                <Head text='Kurier'/>
                <div id='tash-header'>
                        <img src={images.raj} alt=""/>

                    <h2 id='text' className='my-3'> Fazliddin Nasruddinov  </h2>
                    <Button_add title='Malumotlarni o`zgartirish' btn_click={handleOpen1}><i className="fa-solid fa-pen-to-square mx-2"></i></Button_add>
                </div>

                <div className="Tabs">
                    <ul className="nav">
                        <TabNavItem  title="Statistika" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                        <TabNavItem  title="Hisob kitob" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                        <TabNavItem   title="Arxiv"  id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </ul>

                    <div className="outlet">
                        <TabContent id="tab1" activeTab={activeTab}>
                            <div className="row">
                                <div className="col-md-6">
                                    <Cirle_progresbar foiz='50'/>
                                </div>
                                <div className="col-md-6">
                                    <Paymant_item isActive={false}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Cirle_progresbar foiz='80'/>
                                </div>
                                <div className="col-md-6">
                                    <Paymant_item isActive={false}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Cirle_progresbar foiz='10'/>
                                </div>
                                <div className="col-md-6">
                                    <Paymant_item isActive={false}/>
                                </div>
                            </div>
                        </TabContent>
                        <TabContent id="tab2" activeTab={activeTab}>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <Paymant_item isActive={true}/>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <Paymant_item isActive={true}/>
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-6">
                                    <Paymant_item isActive={true}/>
                                </div>
                            </div>
                        </TabContent>
                        <TabContent id="tab3" activeTab={activeTab}>
                            <div className="row">
                                <p>2022 - yil</p>
                            </div>

                            <div className="row">
                                <Arxiv_item soni = {1300} sanasi='22.03.2023'/>
                                <Arxiv_item soni = {1500} sanasi='22.03.2023'/>
                                <Arxiv_item soni = {5600} sanasi='24.03.2023'/>
                                <Arxiv_item soni = {2100} sanasi='21.03.2023'/>
                            </div>
                        </TabContent>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kurier;