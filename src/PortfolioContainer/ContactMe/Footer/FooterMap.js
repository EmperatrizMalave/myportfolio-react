import React from 'react';
import './FooterMap.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


const map = function map () {
  return (
  <GoogleMap
    defaultZoom={10}
    defaultCenter = {{ lat:20.7167  , lng:-103.4}}  
  />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(map))


export default function FooterMap() {
  return (
    <div className='map' style={{width:'60vw', height:'100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCbwLMS4v4fv6Yu2Q5IGJYFj88v336Lapc`}
        loadingElement= {<div style={{ height: "100% " }} />}
        containerElement= {<div style={{ height: "100%" }} />}
        mapElement= {<div style={{ height: "100%" }} />}
      />
    </div>
  )
}
