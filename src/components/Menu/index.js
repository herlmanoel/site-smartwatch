import React from 'react';

import './style.css';
import logoImg from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu-icon.png';
import MenuModal from '../MenuModal';

import { useContextMenuModal } from '../../context/contextMenuModal';

export default function Menu() {

    const { showModal, setShowModal } = useContextMenuModal();

    function handleToggleModal(event) {
        event.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
            <div className="menu-header">

                <div className="menu-header-sub-lado">
                    <a onClick={(event) => handleToggleModal(event)} >
                        <img className="icon-menu" src={menuIcon} />
                    </a>
                </div>


                <div className="menu-header-sub">
                    <a>
                        <img className="logo-menu" src={logoImg} alt="honor" />
                    </a>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Smartphone</a></li>
                            <li><a href="#">Store</a></li>
                            <li>
                                <button>Buy Now</button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            { showModal && <MenuModal />}
        </>
    );
}