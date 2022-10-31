import './App.css'
import WeatherContent from './components/WeatherContent'
import WeatherExtraContent from './components/WeatherExtraContent'
import Loader from './components/Loader'

function App() {

  return (
    <div className="App">
        <div className='Weather-card'>
          <Loader/>
          <WeatherContent/>
          <WeatherExtraContent/>
        </div>
    </div>
  )
}

export default App
