import './App.css'
import WeatherComponent from './components/Weather/WeatherComponent'
import CityComponent from './components/City/CityComponent'
import { useState } from 'react';
import axios from 'axios';

const API_KEY = "dd5537aa7bdfd03a433ab32e7e4d919b"
function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    setWeather(response.data)
  }
  return (
    <div className="container">
      <span className="applable">Weather App</span>
      <div className="CityComponent">
        {weather ? (
          <WeatherComponent weather={weather} />) :
          (<CityComponent setCity={setCity} fetchWeather={fetchWeather} />)}
      </div>
      <span className='madewith'>Made with ❤ by Sahil Bhadu</span>
    </div>
  );
}

export default App;
