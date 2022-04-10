import React from 'react'
import style from './Welcome.module.css'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className={`${style.container}`}>
        <img className={`${style.flecha}`} src="https://i.ibb.co/XyKhQ5N/flecha.png" alt="Flecha inst." />
        <h1 className={`${style.title}`}>Welcome, now you can know the weather</h1>
        <h2 className={`${style.how}`}>How?</h2>
        <div className={`${style.text}`}>
        <span>Very simple. Just search for the name of the city/country you want in the search engine <br /> 
        You can search for as many as you want, and delete the ones you no longer need.<br />
        In the "<Link className={`${style.about}`} to='/about'> About </Link>" section you can find information about the project and the developer's contact</span>
        </div>

    </div>
  )
}
