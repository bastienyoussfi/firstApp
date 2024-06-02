import React, { useEffect, useState } from 'react'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('/countries')
    .then((res) => res.json()
    .then((data) => setCountries(data)
    ))
    }, []);

  return (
    <div>

        {(typeof countries === 'undefined') ? (
          <p> Loading... </p>
        ) : ( 
          countries.map((country, i) => 
          <p key={i}> <h1>{country.name}</h1> 
          <h2>{country.continent}</h2> </p>)
        )}
      
    </div>
  )
}

export default App
