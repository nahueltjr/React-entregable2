import React from 'react';
import { useState} from 'react';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';

const WeatherContent = () => {
    
  const {weather,tempC,tempF,feelsC,feelsF} = useFetch();

  const[fahrenheit, setFahrenheit] = useState(true)

    return (
       <div className='Weather-content'>
            <div className='Weather-content-city'>
              <h1>Today in {weather.name}, {weather.sys?.country}</h1>
            </div>

            <div className='Weather-content-grid'>
             <div className='Weather-content-icon'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                <p>{weather.weather?.[0].description}</p>
            </div>
            
            <div className='Weather-content-temp'>
            <p className='temp'>{fahrenheit?tempC : tempF}°{fahrenheit? 'C':'F' }</p>
            <p>feels like {fahrenheit? feelsC : feelsF}°{fahrenheit? 'C':'F'}</p>
            <motion.button whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} whileTap={{ scale: 1 }} 
            onClick={()=>setFahrenheit(!fahrenheit)}>F°/C°</motion.button>
            </div> 
            </div>
            
       </div>
    );
};

export default WeatherContent;