import React from 'react';
import './Modal.css'
import './bootstrap.min.css'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (

            <div id="modal">
                <div id="overlay" onClick={onClose}>

                </div>
                <div id="modal-content">
                    <span className='close'  onClick={onClose}>&times;</span>

                    <div id="content">
                        {children}
                    </div>
                </div>
            </div>

    );
}

export default Modal;
