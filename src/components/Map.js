import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '700px'
};

const OPTIONS = {
    minZoom: 4,
    maxZoom: 17,
  }

const center = {
  lat: 51.335082549646415,
  lng: 16.635713431414114
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAyVZBjfCL2JeoeEMGiknB665I1oY91_XY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        options = {OPTIONS}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker icon="/map-pin.svg" position={center}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)