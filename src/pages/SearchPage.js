import React from "react";
import { useState } from "react";
import "../index.css";
import CardList from "../componentes/CardList";
import SearchBar from "../componentes/SearchBar";
import HeroSource from "../api/HeroSource";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import { useContext } from "react";

export default function SearchPage() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const [state, setState] = useState({
    results: [],
  });

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  const onSearch = async (text) => {
    const results = await HeroSource.get(`/10159386337269259/search/${text}`);

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <>
      <div className="container">
        <h3>
          Use the search bar to find your superheroes and create your own team!{" "}
        </h3>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </>
  );
}
