import './App.css';
import Nav from './Components/Nav.jsx';
import Cards from './Components/Cards.jsx';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Components/About.jsx';
import Welcome from './Components/Welcome.jsx';
import MoreInfo from './Components/MoreInfo.jsx';

export default function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function onSearch(city) {
    city = city.target[0].value;
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => { return r.json() })
      .then((resource) => {
        if (resource.main !== undefined) {
          const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("City was not found.");
        }
      });
  }
  
    return(
      <BrowserRouter>
        <div className="App">
          <Route path='/'>
            <Nav onSearch={onSearch} />
          </Route>
          <Route path='/moreinfo'>
            <MoreInfo/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route exact path='/cities'>
            <Cards cities={cities} onClose={onClose} />
          </Route>

          <Route exact path='/'>
            <Welcome/>
          </Route>

          

        </div>
      </BrowserRouter>
    );

}
