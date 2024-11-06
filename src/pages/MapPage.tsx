import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import { teamMembers } from '../data/teamMembers';
import CustomMarker from '../components/CustomMarker';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

// Create a new component to handle bounds
const BoundsHandler = ({ markers }: { markers: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(coords => L.latLng(coords[0], coords[1])));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, markers]);

  return null;
};

const MapPage = () => {
  const mapRef = useRef<L.Map>(null);

  // Create array of marker coordinates
  const markerCoordinates = teamMembers.map(member => [
    member.location.coordinates[1],
    member.location.coordinates[0]
  ] as [number, number]);

  return (
    <div className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Global Presence
        </h1>
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
          <MapContainer
            ref={mapRef}
            center={[20, 0]}
            zoom={2}
            className="w-full h-[600px]"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {teamMembers.map((member) => (
              <CustomMarker
                key={member.id}
                member={member}
                position={[
                  member.location.coordinates[1],
                  member.location.coordinates[0]
                ]}
              />
            ))}
            <BoundsHandler markers={markerCoordinates} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapPage;