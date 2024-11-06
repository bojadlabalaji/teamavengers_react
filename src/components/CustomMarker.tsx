import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

interface CustomMarkerProps {
  member: any;
  position: [number, number];
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ member, position }) => {
  const map = useMap();

  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-wrapper">
        <div class="marker-content">
          <div class="marker-pin"></div>
          <img src="${member.profile}" class="marker-image" alt="${member.name}">
        </div>
        <div class="profile-popup">
          <div class="profile-popup-content">
            <img src="${member.profile}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p><strong>${member.title}</strong></p>
            <div class="location">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>${member.location.name}</span>
            </div>
          </div>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 30],
    popupAnchor: [0, -30]
  });

  const handleClick = () => {
    map.flyTo(position, 10, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  };

  return (
    <Marker 
      position={position} 
      icon={customIcon}
      eventHandlers={{
        click: handleClick
      }}
    />
  );
};

export default CustomMarker; 