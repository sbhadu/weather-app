import React from 'react'
import './WeatherComponent.css'

export const WIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
}
export default function WeatherComponent(props) {
    const { weather } = props
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    const WeatherInfoComponent = (props) => {
        const { name, value } = props;
        const img = {
            sunset: "/icons/temp.svg",
            sunrise: "/icons/temp.svg",
            humidity: "/icons/humidity.svg",
            wind: "/icons/wind.svg",
            pressure: "/icons/pressure.svg",
        }
        return (
            <div className='InfoContainer'>
                <img className='InfoIcon' src={img[name]} alt='img' />
                <span className='InfoLabel'>{value}
                    <span>{name}</span>
                </span>
            </div>
        )
    }
    return (
        <>
            <div className='WeatherCondition'>
                <span className='Temprature'>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{` | ${weather?.weather[0].description} `}
                </span>
                <img className='WeatherLogo' src={WIcons[weather?.weather[0].icon]} alt="img" />
            </div>
            <span className='Location'>{`${weather?.name}, ${weather?.sys?.country}`}</span>
            <span className='WeatherInfoLabel'>Weather Info</span>
            <div className='WeatherInfoContainer'>
                <WeatherInfoComponent name={isDay ? 'sunset' : 'sunrise'} value={getTime(weather?.sys[isDay ? 'sunset' : 'sunrise'])} />
                <WeatherInfoComponent name='humidity' value={weather?.main?.humidity} />
                <WeatherInfoComponent name='wind' value={weather?.wind?.speed} />
                <WeatherInfoComponent name='pressure' value={weather?.main?.pressure} />
            </div>
        </>
    )
}
