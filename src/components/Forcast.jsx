import React from 'react'
import { iconUrlFromCode } from '../services/WeatherService'

function Forcast( {title, items}) {
  return (
    <div>
        <div className="flex ietms-center justify-center mt-6">
            <p className="text-white font-meduim uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
            {items.map((item, key) => (
                <div key={key} className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="sunny" className="w-12 my-1" />
                <p className="font-meduim"> {`${item.temp.toFixed()}°`} </p>
            </div>
            ))}
            

            
        </div>

        
    </div>
  )
}

export default Forcast