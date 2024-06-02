import React, { useEffect, useState } from 'react'
import Homepage from './pages/homepage'
import { showCountry, listCountries } from './pages/countries'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('/countries')
    .then((res) => res.json()
    .then((data) => setCountries(data)
    ))
    }, []);

    useEffect(() => {
      fetch('/countries')
      .then((res) => res.json()
      .then((data) => setCountries(data)
      ))
    }, []);

  return (
    //showCountry(countries[0])
    listCountries(countries)
    //Homepage()
  )
}

export default App
