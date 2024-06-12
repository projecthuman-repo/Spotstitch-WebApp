import React, { useState, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import InfoBox from './InfoBox';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const MapComp = ({ locations }) => {
  const initialCenter = locations.length > 0 ? locations[0] : { lat: 0, lng: 0 };
  const [infoData, setInfoData] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API,
    libraries,
  });

  const mapRef = useRef(null);

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    setMap(map);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleMarkerClick = (location) => {
    if (map) {
      map.panTo({ lat: location.lat, lng: location.lng });
    }
    setInfoData(location);
  };

  return (
<div className='position-relative' >
      <GoogleMap
          mapContainerStyle={{
            ...mapContainerStyle,
            width: '25%',
            borderRadius: '25px'
          }}
        zoom={13}
        center={initialCenter}
        onLoad={onMapLoad}

      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => handleMarkerClick(location)}
          />
        ))}
      </GoogleMap>
      {infoData && <InfoBox info={infoData} />}
    </div>
  );
};

export default MapComp;
