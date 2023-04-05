
import React, { useState } from 'react';
import Modal from './components/Modal';
import About from "./About";
import News from "./News";
import Contact from "./Contact";
import './App.css'
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        age: ""
    });
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
            <h1>qiymat: {formData.name}</h1>

            <div id="overlay" onClick={handleClose} style={{
                display:!isOpen?"none":'block'
            }}>
            </div>

            <button onClick={handleOpen}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <form onSubmit={ handleSubmit }>
                    <div className="box">
                        <div id="form-group">
                            <input type="text" name='name' value={formData.name} placeholder='enter name' onChange={handleInputChange}/>
                        </div>
                        <div id="form-group">
                            <input type="text" name='surname'  value={formData.surname} placeholder='enter surname' onChange={handleInputChange}/>
                        </div>

                        <div id="form-group">
                            <input type="text" name='age'   value={formData.age} placeholder='enter age' onChange={handleInputChange}/>
                        </div>
                        <button type='submit'> yuborish</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
export default App;
