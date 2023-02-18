import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PortfolioItemDetails from "./portfolioItem-details";
const PortfolioItem = ({ item }) => {
  // console.log("portfolioItem", item);
  return (
    <>
      <Col xl={3} lg={4} md={6} sm={6} className="mb-5">
        <figure className="effect-ming tm-video-item">
          <Image src={item.image} alt={item.title} className="img-fluid" />
          <figcaption className="d-flex flex-column align-items-center justify-content-center">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <Link to={`/${item.slug}`}>View more</Link> */}
          </figcaption>
        </figure>
      </Col>
    </>
  );
};

export default PortfolioItem;
