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
        <a className="navbar-brand" href="#">
          <i className="fas fa-film mr-2"></i>
          <a href="/">Muhammad Medhat</a>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link nav-link-1 active"
                aria-current="page"
                href="index.html"
              >
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-2" href="videos.html">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-3" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-4" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
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
