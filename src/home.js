import React, { useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import d from "./data.js";

import PortfolioItem from "./portfolioItem";
const HomeScreen = ({ item }) => {
  const items = d;
  const c1 = items.filter((i) => i.cat == 1);
  console.log("c1", c1);
  // c1.forEach((x) => console.log(x));

  return (
    <Container className="tm-60">
      <div class="row mb-4">
        <h2 class="col-6 tm-text-primary">Latest Portfolio Items</h2>
        <div class="col-6 d-flex justify-content-end align-items-center"></div>
      </div>
      <Row className="tm-mb-90 tm-gallery">
        <h2>CMS: Joomla, WordPress</h2>

        {items
          .filter((i) => i.cat == 1)
          .map((x) => {
            return <PortfolioItem key={x.title} item={x} />;
          })}
        <hr />
        <h2>Other</h2>
        {items
          .filter((i) => i.cat !== 1)
          .map((p) => {
            return <PortfolioItem key={p.title} item={p} />;
          })}
      </Row>
    </Container>
  );
};

export default HomeScreen;
