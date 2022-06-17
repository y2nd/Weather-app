import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" placeholder="Search for city..."/>

            <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} />
            <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" size={25}/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center ">
            <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125">°C</button>
            <span className="text-xl text-white mx-1" >|</span>
            <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125">°F</button>
        </div>

    </div>
  )
}

export default Inputs