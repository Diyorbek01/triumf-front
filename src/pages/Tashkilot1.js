import TabNavItem from "../components/TabNavItem";
import TabContent from "../components/TabContent";
import React, {useState} from "react";
import './css/Tashkilot1.css'
import Head from "../components/Head";
import Button_add from "../components/Button_add";
import Cirle_progresbar from "../components/Cirle_progresbar";
import Paymant_item from "../components/Paymant_item";
import Arxiv_item from "../components/Arxiv_item";
import images from "../img"
import '../font/css/all.min.css';
import Modal from "../components/Modal";

export function Tashkilot1() {

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


    return (
        <>
            <div className="main">

                <Modal isOpen={isOpen1} onClose={handleClose1}>
                    <div id='child_modal'>
                        <form action="">
                            <div id="head-box">
                                <h1> Ma’lumotlarni o’zgartirish </h1>
                                <div id="img-box">
                                    <img src={images.tashkilot_} alt=""/>
                                </div>
                            </div>
                            <div id="input-group">
                                <div id="form-group">
                                    <input type="number" id='id'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='INN'/>
                                </div>
                                <div id="form-group">
                                    <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                    <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                                </div>
                                <div id="form-group">
                                    <input type="text" placeholder='Tashkilot nomi'/>
                                </div>
                                <div id="form-group">
                                    <input type="number" placeholder='Har bir xat uchun summa'/>
                                    <span id='uzs'>uzs</span>
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
                                    <button id='add'> Davom etish </button>
                                </div>
                                <div id="btn-box">
                                    <button id='clear'> O`chirish </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </Modal>

                 <Head text='Tashkilot'/>

             <div id='tash-header'>
                 <div id="img-box">
                     <img src={images.tashkilot_} alt=""/>
                 </div>
                 <h1 id='text' className='my-3'>Toshkent issiq suv </h1>
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
    );
}

export default Tashkilot1;