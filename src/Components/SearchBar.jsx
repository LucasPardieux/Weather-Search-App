import React, { useState } from "react";
import Cards from "./Cards";
import estilos from "./SearchBar.module.css"
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch }) {

    const [state, setState] = useState();

    const onChange = (e) => {
        setState(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(e);
    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    className={`${estilos.input}`}
                    type="text"
                    placeholder="City..."
                    onChange={(e) => onChange(e)}
                />
                <input className={`${estilos.boton}`} type="submit" value="Search" />
                
            </form>
        </>
    );
}