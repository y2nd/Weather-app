import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/WeatherService';

import {useEffect, useState} from 'react';

function App() {

  const [query, setQuery] = useState({q: "bordeaux"});

  const [units, setUnits] = useState("metric");

  const [weather, setWeather] = useState(null);

  useEffect( () => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({...query, units}).then((data) => {setWeather(data)});

      console.log(weather);
    }
  
    fetchWeather();
  }, [query, units]);

  
  const formatBackground = () => {
    if(!weather) return "from-cyan-700 to-blue-700";
    const treshhold = units === "metric" ? 25 : 77;
    if(weather.temp <= treshhold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forcast title="hourly forcast" items={weather.hourly}/>
          <Forcast title="daily forcast" items={weather.daily}/>
        </>
      )}

      
    </div>
  );
}

export default App;
