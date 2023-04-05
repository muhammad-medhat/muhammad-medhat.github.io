import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <!-- Page Loader --> */}
    <div id="loader-wrapper">
      <div id="loader"></div>

      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">
          <span>
            <i className="fas fa-film mr-2"></i>Muhammad Medhat
          </span>
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
    <div
      className="tm-hero d-flex justify-content-center align-items-center"
      data-parallax="scroll"
      data-image-src="img/hero.jpg"
    ></div>
    <App />
  </React.StrictMode>
);
