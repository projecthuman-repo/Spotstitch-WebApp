import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import InfoBox from './InfoBox';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 600px;
`

const MapComp = ({ locations }) => {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Configure Leaflet to use the default marker icon
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    // Create a Leaflet map instance
    const map = L.map('map').setView([51.505, -0.09], 13);
    mapRef.current = map; // Store the map instance in the ref

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers based on locations
    if (locations && locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(location => L.latLng(location.lat, location.lng)));
      
      locations.forEach(location => {
        // Create marker
        const marker = L.marker([location.lat, location.lng]).addTo(map);

        //Optional - Add a popup to the marker
        // const popupContent = `<b>${location.name}</b><br>${location.description}`;
        const popupContent = `<b>Currently Showing<b/>`;

        marker.bindPopup(popupContent, {
          autoPan: true, // Enable autoPan to ensure the popup is fully visible
          maxWidth: 250, // Set the maximum width of the popup
          closeButton: false, // Disable the close button
          offset: [13, 0] // Adjust the popup's position vertically (for example, move it up by 30 pixels)
        });

        // Add click event listener to center map on marker click
        marker.on('click', function(event) {
          map.setView(marker.getLatLng(), map.getZoom());
          setSelectedLocation(location); // Update selectedLocation state
          
        });
        map.on('click', function(event) {
          setSelectedLocation(null); // Reset selectedLocation state
          marker.closePopup(); // Close the popup
        })
        map.on('drag', function(event) {
          marker.closePopup(); // Close the popup
          setSelectedLocation(null); // Reset selectedLocation state
        })
      });

      // Fit map to the bounds of all markers
      map.fitBounds(bounds);
    }
  }, [locations]);

  return (
    <div className=''>
      <MapContainer id="map">
      </MapContainer>
      {selectedLocation && <InfoBox info={selectedLocation} />} {/* Render InfoBox if selectedLocation is not null */}
    </div>
  );
};

export default MapComp;
