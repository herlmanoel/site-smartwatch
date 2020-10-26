import React from 'react';

import './style.css';

export default function Card({ title, imageCard }) {
    return (
        <div className="container-card">
            <div className="card-title-subtitle"> 
                <h3 className="title">
                    { title }
                </h3>
                <h4 className="subtitle">
                    Element
                </h4>
            </div>
            <div className="card-img">
                <img src={ imageCard } />
            </div>
        </div>
    );
}