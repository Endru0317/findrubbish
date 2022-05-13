import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function Map() {
  const [rubbishData, setRubbishData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        // handle success
        setRubbishData(response.data);
        setLoaded(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="map-page">
      <article className="information">
        In contrast to the natural environment is the built environment. Built
        environments are where humans have fundamentally transformed landscapes
        such as urban settings and agricultural land conversion, the natural
        environment is greatly changed into a simplified human environment.
        hence beaver dams, and the works of mound-building termites, are thought
        of as natural.
        <Link to="/addrubbish">
          <button className="add-rubbish">Add Rubbish Location </button>
        </Link>
      </article>

      <MapContainer
        center={[52.539131920318475, 13.369860280966435]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <Link to="/addrubbish">
          <button className="add-rubbish">Add Rubbish Location </button>
        </Link>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {loaded
          ? rubbishData.map((items, index) => {
              console.log("items", items);
              return (
                <Marker position={[items.lat, items.lon]} key={index}>
                  <Popup>
                    <img src={items.img} style={{ width: "150px" }}></img>
                    <div>{items.display_name}</div>
                  </Popup>
                </Marker>
              );
            })
          : null}
      </MapContainer>
    </div>
  );
}
