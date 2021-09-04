import React, { useState, useEffect } from 'react';
import './css/weather.css';
import Navbar from './Navbar';

const getStorageData = ()=>{
    let storageData = localStorage.getItem('cityName');
    if(storageData){
        return storageData;
    }else{
        return '';
    }
}

function Weather() {
    const [city, setCity] = useState(getStorageData());
    const [cityData, setCityData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=560bc9b2331657e2ac220fc9a039b01b`;
            const getData = await fetch(api);
            const jsonData = await getData.json();
            // console.log(jsonData.main);
            setCityData(jsonData.main);
        }
        fetchWeather();

        //Local Storage
        localStorage.setItem('cityName',city);
    }, [city])
    return (
        <div className="container">
            <Navbar/>
            <div className="weatherBox">
                <div className="inputField">
                    <input type="search"
                        className="inputData"
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                        value={city}
                    />
                </div>
                {
                    cityData ? (
                        <div className="weatherData">
                            <h2>
                                <i className="fas fa-street-view"></i> {city}
                            </h2>
                            <h1 className="temp">{cityData.temp} °C</h1>
                            <h3 className="min-max">Min-temp {cityData.temp_min} °C | Max-temp {cityData.temp_max} °C</h3>
                        </div>
                    ) : (
                        <h1 className="notFound">No data found</h1>
                    )
                }
            </div>
        </div>
    );
}

export default Weather;
