import React from 'react';
import logoImg from '../../assets/images/logo.png';
import closeIcon from '../../assets/images/close.png';

import './style.css';
import { useContextMenuModal } from '../../context/contextMenuModal';

export default function Modal() {
    const { showModal, setShowModal } = useContextMenuModal();

    function handleToggleModal(event) {
        event.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
            <div className="containerModal">
                <div className="divCloseIcon">
                    <a onClick={(event) => handleToggleModal(event)}>
                        <img className="closeIcon" src={closeIcon} alt="Fechar" />
                    </a>
                </div>
                <div className="menuModal">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Smartphone</a></li>
                        <li><a>Store</a></li>
                    </ul>
                </div>
                <div className="divFooter">
                    <a><img className="closeIcon" src={logoImg} alt="Fechar" /></a>
                </div>
            </div>

            <div className="wrapper" onClick={(event) => handleToggleModal(event)}>
            </div>
        </>
    );
}