import React from 'react';
import Menu from '../../components/Menu';

import './style.css';

import smartwatch5 from '../../assets/images/smartwaatch5.png';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import MenuModalProvider from '../../context/contextMenuModal';

export default function Home() {
    return (
        <MenuModalProvider>
            <Menu />
            <div className="container">
                <div className="block-01">
                    <div className="block-text">
                        <div>
                            <h1>Smartwatch</h1>
                            <h2>E L E M E N T S E R I E</h2>
                        </div>
                        <div className="block-text-subtitle">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aliquam congue sed et leo, dignissim odio justo.</h3>
                        </div>
                    </div>
                    <div className="block-cards">
                       <Carousel />
                    </div>
                </div>
                <div className="block-02">
                     <img src={smartwatch5} />
                </div>
            </div>
        </MenuModalProvider>
    );
}