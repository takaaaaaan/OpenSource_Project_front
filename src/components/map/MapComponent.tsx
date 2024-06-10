// components/MapComponent.js
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useState } from "react";

interface MapComponentProps {
  locations: { lat: number, lng: number }[];
}

const MapComponent: React.FC<MapComponentProps> = ({ locations }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const mapStyles = {
    height: "85vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: 128.4194,
  };

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmount = (map: google.maps.Map) => {
    setMap(null);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={7}
        center={defaultCenter}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerClusterer
          options={{
            styles: [
              {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                height: 53,
                width: 53,
                textColor: "#ffffff",
                textSize: 16
              },
              {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m2.png",
                height: 56,
                width: 56,
                textColor: "#ffffff",
                textSize: 16
              },
              {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png",
                height: 66,
                width: 66,
                textColor: "#ffffff",
                textSize: 16
              },
              {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m4.png",
                height: 78,
                width: 78,
                textColor: "#ffffff",
                textSize: 16
              },
              {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m5.png",
                height: 90,
                width: 90,
                textColor: "#ffffff",
                textSize: 16
              }
            ]
          }}
        >
          {(clusterer) => (
            <>
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location}
                  clusterer={clusterer}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#008cff",
                    fillOpacity: 1,
                    strokeWeight: 0,
                  }}
                />
              ))}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
