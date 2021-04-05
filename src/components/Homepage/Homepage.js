import React from "react";
import CocktailList from "../CocktailList/CocktailList";
import SearchForm from "../SearchForm/SearchForm";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="home-div">
        <h1 className="home-title">
          <span>
            <Player
              autoplay
              loop={false}
              keepLastFrame
              src="https://assets2.lottiefiles.com/packages/lf20_sk0hgpyu.json"
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </span>
          Splash
        </h1>
        <h2 className="subheader">Search for your favorite cocktail!</h2>
        <SearchForm />
      </div>

      <CocktailList />
    </div>
  );
};

export default Homepage;
