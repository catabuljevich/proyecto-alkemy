import React from "react";
import Header from "../componentes/header";
import MyTeam from "../componentes/MyTeam";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import { useContext } from "react";

export default function TeamPage() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="container">
        <Header />
        <MyTeam
          alturaPromedio="0"
          pesoPromedio="0"
          sumaDePowerStats="0"
          cantMiembros="0"
          cantMiembrosconOrientacionBuena="0"
          cantMiembrosconOrientacionMala="0"
        />
      </div>
    </>
  );
}
