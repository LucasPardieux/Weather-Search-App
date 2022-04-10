import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';


function Nav({ onSearch }) {
    return (

        <div>
            <div className={`${style.navbar}`}>
                <img className={`${style.image}`} src='https://freepngimg.com/thumb/weather/23793-9-weather-photos.png' alt="Logo de la pagina" />
                <h3 className={`${style.title}`}>Weather Search App</h3>
                <ul >
                <Link className={`${style.navFont}`} to='/cities'> Home </Link>
                <Link className={`${style.navFont}`} to='/about'> About </Link>
                <Link className={`${style.navFont}`} to='/'> Instructions </Link>
                </ul>
                <div className={`${style.search}`}>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div>
    );
};

export default Nav;