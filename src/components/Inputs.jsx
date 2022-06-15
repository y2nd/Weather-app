import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row items-center justify-center space-x-4">
            <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" placeholder="Search for city..."/>
        </div>
    </div>
  )
}

export default Inputs