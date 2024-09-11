"use client"

import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

function MapBox() {
    const [viewport, setViewport] = useState({
        latitude: 45.211,
        longitude: -75.3903,
        width: "100vw",
        height: "100vh",
        zoom: 10,
    });

  return (
    <div className="w-screen h-screen">
        mapbox doesn't work
{/*         <ReactMapGL {...viewport} mapboxAccessToken='pk.eyJ1IjoiZ2xlbm5ldGF2b2x0IiwiYSI6ImNseTQxbXdjZjBjaDcya3F2ZTN0aGF3dXMifQ.dQklNo4U7qL5O_yKE2GhFw' width="100%" height ="100%">
            
        </ReactMapGL> */}
    
    </div>
  )
}

export default MapBox