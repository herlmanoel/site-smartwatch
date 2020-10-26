import React from 'react';

import Carousel from 'react-elastic-carousel';
import Card from '../Card';

import darkImg from '../../assets/images/dark1.png';
import whiteImg from '../../assets/images/white1.png';

import './style.css';


export default function Carorousel() {
    return (
        <Carousel itemsToShow={3}>
            <Card title="Dark" imageCard={darkImg} />   
            <Card title="White" imageCard={whiteImg} /> 
            <Card title="Dark" imageCard={darkImg} />   
            <Card title="White" imageCard={whiteImg} /> 
            <Card title="Dark" imageCard={darkImg} />   
            <Card title="White" imageCard={whiteImg} />  
        </Carousel>
    );
}