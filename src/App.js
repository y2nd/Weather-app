import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/WeatherService';

import {useEffect, useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q: "bordeaux"});

  const [units, setUnits] = useState("metric");

  const [weather, setWeather] = useState(null);

  useEffect( () => {

    const fetchWeather = async () => {
      const message = query.q ? query.q : "current localtion.";

      toast.info("Fetching weather for " + message);

      const data = await getFormattedWeatherData({...query, units}).then((data) => {
        toast.success(`Weather for ${data.name}, ${data.country} fetched successfully.`);
        setWeather(data);
      });

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
    
    <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
