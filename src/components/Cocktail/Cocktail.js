import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.scss";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className="Cocktail">
      <div className="card border-0">
        <img src={image} className="card-img-top" alt="drink" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5>{glass}</h5>
          <p className="card-text">{info}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
