import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs( {setQuery, units, setUnits} ) {

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if( city !== "" ) setQuery ({q: city})
  };

  const handleKeyPress = (e) => {
    if( e.key === "Enter" ) {
      if( city !== "" ) setQuery ({q: city})
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if(units != selectedUnits) setUnits(selectedUnits);
  }

  const handleLocationClick = () => {
    if( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat, 
          lon
        });
      } );
    }
  }


  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input onKeyPress={handleKeyPress} value={city} onChange={(e) => setCity(e.currentTarget.value)}  type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" placeholder="Search for city..."/>

            <UilSearch onClick={handleSearchClick} className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} />
            <UilLocationPoint onClick={handleLocationClick} className="text-white cursor-pointer transition ease-out hover:scale-125" size={25}/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center ">
            <button onClick={handleUnitsChange} name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125">°C</button>
            <span className="text-xl text-white mx-1" >|</span>
            <button onClick={handleUnitsChange} name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125">°F</button>
        </div>

    </div>
  )
}

export default Inputs