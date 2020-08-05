import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {

    const [weather, setWeather] = useState('')
    const api_key = "b471fda2e23b4902605b59d6ea7d35b8"
    const hook = () => {
        const params = {
            access_key: api_key,
            query: capital
        }
        axios.get('http://api.weatherstack.com/current', { params }).then(response => {
            setWeather(response.data)
        })
    }

    useEffect(hook, [])

    if (typeof weather === "object") {
        return (
            <>
                <div>
                    <h1>  Weather in {capital}</h1>
                </div>
                <div><b>temperature :</b> {weather.current.temperature}</div>

                <div> <img src={weather.current.weather_icons[0]} width="100" height="100" /> </div>
                <div><b>wind :</b> {weather.current.wind_speed} direction {weather.current.wind_dir} </div>
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default Weather