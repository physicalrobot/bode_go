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
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative  } from "date-fns"
function App() {

  const libraries = ["places"];
  const mapContainerSytle = {
    width: "100vw",
    height: "100vh"

  }
  const center = {
    lat: 40.7282,
    lng: 73.7949}

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyD-cfVYXmyPlam72FjxrYrYIlSRpAe9nzU",
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
    <GoogleMap mapContainerStyle={mapContainerSytle} zoom = {8} center={center}></GoogleMap>

  </div>
  )
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
  
}

export default App;
