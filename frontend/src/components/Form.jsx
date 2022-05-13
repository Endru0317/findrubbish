import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import axios from "axios";
import "./Form.css";

export default function App() {
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState("");

  function submitRubbish(event) {
    event.preventDefault();
    const data = { address, email, image };
    axios.post("http://localhost:5000/upload", data);
  }

  function handleTakePhoto(dataUri) {
    setImage(dataUri);
  }
  return (
    <div className="form-container">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
        <input
          id="Address" /* changed here */
          className="form-field"
          type="text"
          placeholder="Address"
          name="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit" onClick={submitRubbish}>
          Submit
        </button>
      </form>
    </div>
  );
}
