import React from 'react';
import estilos from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
    return (
        <div className={`${estilos.contenedor}`}>
            <button onClick={onClose} className={`${estilos.boton}`}>X</button>
            <h3 className={`${estilos.nombre}`}>{name}</h3>
            <div className={`${estilos.maxMin}`}>
                <div className={`${estilos.fonts}`}>
                    <h4>Min</h4>
                    <a>{min}°</a>
                </div>
                <div className={`${estilos.fonts}`}>
                    <h4>Max</h4>
                    <a>{max}°</a>
                </div>
                <img className={`${estilos.imagen}`} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="logo del tiempo" />
                <Link to='/moreinfo'><button className={`${estilos.info}`}>Info.</button></Link>
            </div>
        </div>)
};