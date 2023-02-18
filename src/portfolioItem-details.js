import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import d from "./data";
const PortfolioItemDetails = () => {
  const { name } = useParams();
  console.log(`name is ${name}`);
  const item = d.find((i) => i.slug == name);
  console.log("portfolioItem", item);

  return (
    <>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-12 tm-text-primary text-capitalize">
            {item.title}
          </h2>
        </div>
        <div className="row tm-mb-90">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
            <Image
              src={item.image}
              alt={item.title}
              className="img-fluid border"
            />
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
            <div className="tm-bg-gray tm-video-details">
              {" "}
              <p className="mb-4">{item.desc}</p>
              <div className="text-center mb-5">
                <a href="#" className="btn btn-primary tm-btn-big">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- row --> */}
      </div>
    </>
  );
};

export default PortfolioItemDetails;
