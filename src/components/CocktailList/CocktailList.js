import React from "react";
import { useGlobalContext } from "../../context";
import Cocktail from "../Cocktail/Cocktail";
import Spinner from "../Spinner/Spinner";
import "./CocktailList.scss";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Spinner />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="no-cocktail">No cocktails matched your search criteria</h2>
    );
  }
  return (
    <div className="CocktailList">
      <h2 className="cocktails-header">Cocktails</h2>
      <div className="cocktails-container">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </div>
  );
};

export default CocktailList;
