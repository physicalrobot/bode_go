import { useState, useEffect } from "react";
import './App.css';
import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

// import React from "react";
import {
  GoogleMap, 
  useJsApiLoader ,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative  } from "date-fns"

const libraries = ["places"];
const mapContainerSytle = {
  width: "100vw",
  height: "100vh",
}

const center = {
  lat: 40.7282,
  lng: -73.7949}


function App() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, 

  });
 




  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps" 

  


  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
  <div>
    <GoogleMap 
    mapContainerStyle={mapContainerSytle} 
    zoom = {8} 
    center={center}
    ></GoogleMap>

  </div>
  )
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
  
}

export default App;
