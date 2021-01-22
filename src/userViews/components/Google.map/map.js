import React, { useState } from "react";
import { LoadScript, GoogleMap, InfoWindow } from "@react-google-maps/api";
const Map = () => {
  const [selected, setSelected] = useState({});
  const defaultCenter = {
    lat: 13.736717,
    lng: 100.523186,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyBAiCtWEOnN9RBor3DiuPvtD9cjXEB5UzY"
    >
      <GoogleMap
        id="c2676f5f82990a9d"
        zoom={16}
        mapContainerStyle={containerStyle}
        center={defaultCenter}
      >
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
