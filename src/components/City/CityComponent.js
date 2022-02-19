import React from 'react'
import './CityComponent.css'

export default function Weather(props) {
    const { setCity, fetchWeather } = props;
    return (
        <>
            <img className='WeatherLogo' src='/icons/perfect-day.svg' alt='img' />
            <span className='CityLabel'>Find Weather of your City</span>
            <form className='SearchBox' onSubmit={fetchWeather}>
                <input placeholder='City' onChange={(e) => setCity(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
