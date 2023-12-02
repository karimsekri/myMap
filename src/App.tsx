import { useEffect, useState } from 'react'
import L from 'leaflet'
import './App.css'

function App() {

  useEffect(() => {
    let carte = L.map('macarte').setView([48.8534, 2.3488], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carte);
    console.log("carte", carte);
  }, []);




  return (
    <>
    <h1>Hello</h1>
      <div id="macarte"></div>
    </>
  )
}

export default App
