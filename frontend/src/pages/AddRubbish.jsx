import React, { useState } from "react";
import Form from "@components/Form";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "../App.css";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const AddRubbish = () => {
  return (
    <div className="map-page">
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      <Form />
      <form className="forme-add-location">
        <label htmlFor="character">describe:</label>
        <textarea />
        <button className="add-rubbish">Add Rubbish Location </button>
      </form>
    </div>
  );
};

export default AddRubbish;
