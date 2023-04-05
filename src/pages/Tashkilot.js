
import React, {useEffect, useState} from 'react';
import './css/Tashkilot.css'
import Head from "../components/Head";
import Search from "../components/Search";
import Tashkilot_item from '../components/Tashkilot_item'
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import images from '../img'

const  URL = "https://triumf.pythonanywhere.com/api/v1/dashboard/";
const  initialState = {
    id:"",
    name: "",
    inn: "",
    password: "",
    price:null,
    is_active:true
}

function Tashkilot() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/tashkilot1`;
        navigate(path);
    }

    const routeChange1 = () => {
        let path = `/tashkilot2`;
        navigate(path);
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const handleOpen = () => {
        setValue(initialState)
        setIsOpen(true)
    };
    const handleOpen1 = async (e) => {
      await  setValue(initialState)
       await setIsOpen1((prev)=>!prev);
       await setDelete(e.target.value)
       await onEdit()
    }

    const handleClose = () => setIsOpen(false);
    const handleClose1 = () => setIsOpen1(false);

    const [show_pass, setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!show_pass);

    const [value, setValue] = useState(initialState)

    const handleValue = (e) => {
        const {name, value} = e.target
        setValue((prev) => ({...prev, [name]: value}))
    }

    useEffect(() =>{
        fetchTashkilot()
    },[])

    const  onEdit = ()=>{
        fetch(`${URL}/organizations/${delet}/`)
            .then((response)=>response.json())
            .then((data)=>{
                setValue(data)
                console.log(value)
            })
    }
    const fetchTashkilot=()=>{
        console.log("qayta yuklandi")
        fetch(`${URL}/organizations/`)
         .then((response)=>response.json())
         .then((data)=>{
              setTash(data)
         })
    }
    const [delet,setDelete] = useState(0)
    const onDelete =  (e) =>{
       e.preventDefault()
        fetch(`${URL}/organizations/${delet}`,{
            method:"DELETE"
        })
        console.log("malumot o`chirildi")
        setIsOpen1((prev)=> !prev)
        fetchTashkilot()
    }

    const  handleSubmit = async (e) => {
        e.preventDefault()

        await fetch(`${URL}/organizations/`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body:JSON.stringify(value)
        })
             .then(response => response.json())
             .then(data =>{
                 console.log(data)
             })
        setIsOpen((prev)=> !prev)
        fetchTashkilot()
    };

    const [tash,setTash] = useState([])

    return(
        <>
          <div className="main">
              <Modal isOpen={isOpen} onClose={handleClose}>
                 <div id='child_modal'>
                     <form onSubmit={handleSubmit}>
                        <div id="head-box">
                            <h1>Tashkilot qo`shish</h1>
                            <div id="img-box">
                                <img src={images.tashkilot_} alt=""/>
                            </div>
                        </div>
                         <div id="input-group">

                             <div id="form-group">
                                 <input type="number" placeholder='INN' name="inn" onChange={handleValue} value={value.inn}/>
                             </div>
                             <div id="form-group">
                                 <input type={show_pass?'text':'password'} name='password' placeholder='Kod'
                                       value={value.password} onChange={handleValue}/>
                                 <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                             </div>
                             <div id="form-group">
                                 <input type="text" placeholder='Tashkilot nomi' name='name'
                                        value={value.name} onChange={handleValue}/>
                             </div>
                             <div id="form-group">
                                 <input type="number"  name='price' placeholder='Har bir xat uchun summa'
                                       value={value.price} onChange={handleValue}/>
                                 <span id='uzs'>uzs</span>
                             </div>
                             <div id="form-group">
                                 <input type="checkbox" id="switch" name='is_active' value={value.is_active}
                                        className="checkbox"  onChange={handleValue}/>
                                 <label htmlFor="switch" className="toggle">
                                     <h3 id='check'>
                                         <span>Aktiv</span>
                                         <span>Noaktiv</span>
                                     </h3>  </label>
                             </div>
                             <div id="btn-box">
                                 <button id='add'> Davom etish </button>
                             </div>

                         </div>

                     </form>
                 </div>
              </Modal>
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
                                  <input type="number" id='id' value={value.id}/>
                              </div>
                              <div id="form-group">
                                  <input type="number" placeholder='INN' value={value.inn}/>
                              </div>
                              <div id="form-group">
                                  <input type={show_pass?'text':'password'} placeholder='Kod' value={value.password}/>
                                  <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                              </div>
                              <div id="form-group">
                                  <input type="text" placeholder='Tashkilot nomi' value={value.name}/>
                              </div>
                              <div id="form-group">
                                  <input type="number" placeholder='Har bir xat uchun summa' value={value.price}/>
                                  <span id='uzs'>uzs</span>
                              </div>
                              <div id="form-group">
                                  <input type="checkbox" id="switch" value={value.is_active}
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
                              <div id="btn-box" onClick={onDelete}>
                                  <button id='clear'> O`chirish {delet}</button>
                              </div>
                          </div>
                      </form>

                  </div>
              </Modal>

              <Head text='Tashkilotlar'/>
             <div className="row d-flex justify-content-end">
                 <Search  text='Tashkilot qo`shish' btn_click={ handleOpen} btn={true} />
             </div>
              <section className='pl-5'>
                  {
                      tash.map((item,index)=>{
                          return(
                               <Tashkilot_item key={index} box_click={routeChange} btn1_click ={ routeChange1 }  btn2_click = {handleOpen1} id={item.id}  text={item.name} > </Tashkilot_item>
                          )
                      })
                  }
              </section>
          </div>
        </>
    )
}

export default Tashkilot;