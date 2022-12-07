import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = () =>{
    const [weather, setWeather] = useState({})
    useEffect(()=>{
    const success = pos => {
      const lat=pos.coords.latitude
      const lon=pos.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abcb2506e0f310915c899c1853bcb585`)
      .then(res => setWeather(res.data))
    }

    navigator.geolocation.getCurrentPosition(success)
    
  },[])

  const tempC = (weather.main?.temp - 273.15).toFixed()
  const feelsC = (weather.main?.feels_like -273.15).toFixed()
  const tempF = ((tempC*1.8)+32).toFixed()
  const feelsF = ((feelsC*1.8)+32).toFixed()

    return {weather,tempC,tempF,feelsC,feelsF}
}
export default useFetch;

