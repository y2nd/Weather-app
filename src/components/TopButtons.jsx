import React from 'react'

function TopButtons( { setQuery }) {
    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Paris",
        },
        {
            id: 3,
            title: "Berlin",
        },
        {
            id: 4,
            title: "Madrid",
        },
        {
            id: 5,
            title: "Rome",
        },
    ]
  return (
    
    

    <div className="flex items-center justify-around my-6">
        {cities.map(city => ( 
            <button onClick={() => setQuery({q: city.title})} className="text-white text-lg font-medium" key={city.id}>{city.title}</button> 
        ))}
    </div>
  )
}

export default TopButtons