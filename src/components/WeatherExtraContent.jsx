import React from 'react';
import useFetch from '../hooks/useFetch';

const WeatherExtraContent = () => {

    const {weather} = useFetch();

    return (
        <div className='Weather-extra-content'>
            <div>
                <i className="fa-solid fa-wind"></i>
                <span>WindSpeed</span> <br />
                <span>{weather.wind?.speed}m/s</span>
            </div>

            <div>
                <i className="fa-solid fa-droplet"></i>
                <span>Humidity</span> <br />
                <span>{weather.main?.humidity}%</span>
            </div>

            <div>
                <i className="fa-solid fa-cloud"></i>
                <span>Clouds</span> <br />
                <span>{weather.clouds?.all}%</span>
            </div>

            <div>
                <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
                <span>Pressure</span> <br />
                <span>{weather.main?.pressure}mb</span>
            </div>
        </div>
    );
};

export default WeatherExtraContent;