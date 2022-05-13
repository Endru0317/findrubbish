import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import axios from "axios";
import "../components/Form.css";

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
  const [address, setAddress] = React.useState("");
  const [describe, setDescribe] = React.useState("");
  const [image, setImage] = React.useState("");

  function submitRubbish(event) {
    event.preventDefault();
    const data = { address, email, image };
    axios.post("http://localhost:5000/upload", data); /* .then((response) => {
      
    }); */
  }

  function handleTakePhoto(dataUri) {
    setImage(dataUri);
  }
  return (
    <div className="map-page">
      <div className="form-container">
        <form className="register-form">
          <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>{" "}
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
          <input
            id="describe"
            className="form-field"
            type="text"
            placeholder="Describe"
            name="describe"
            onChange={(e) => setDescribe(e.target.value)}
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <button className="form-field" type="submit" onClick={submitRubbish}>
            ADD RUBBISH
          </button>
        </form>
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default AddRubbish;
