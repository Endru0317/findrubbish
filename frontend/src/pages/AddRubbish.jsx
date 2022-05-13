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
  useMap,
} from "react-leaflet";
import "../App.css";
import { usePosition } from "use-position";

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
export default function AddRubbish() {
  const [address, setAddress] = React.useState([
    52.51603777910612, 13.405505675340931,
  ]);
  const [describe, setDescribe] = React.useState("");
  const [image, setImage] = React.useState("");

  const getLocation = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(null);
          setAddress([position.coords.latitude, position.coords.longitude]);
          console.log(position.coords.latitude, position.coords.longitude);
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    }
  };
  function submitRubbish(event) {
    event.preventDefault();
    const data = { address, display_name: describe, image };
    axios.post("http://localhost:5000/upload", data); /* .then((response) => {
      
    }); */
    alert("Rubbish submitted");
  }

  function handleTakePhoto(dataUri) {
    setImage(dataUri);
  }
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    <div className="map-page">
      <div className="form-container">
        <form className="register-form">
          <MapContainer center={address} zoom={13}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <ChangeMapView coords={address} />
            <Marker position={address}>
              <Popup>
                <div>YOUR LOCATION</div>
              </Popup>
            </Marker>
          </MapContainer>{" "}
          <button
            className="form-field"
            type="submit"
            onClick={(e) => getLocation(e)}
          >
            GET CURRENT LOCATION
          </button>
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
}
