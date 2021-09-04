import React from "react";
import Card from "./Card";

class MyTeam extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>My Team </h1>
        <h3>My team has {this.props.cantMiembros} members </h3>
        <h4>Avrege Height {this.props.alturaPromedio} </h4>
        <h4>Avrege Weight {this.props.pesoPromedio} </h4>
        <h4>Powerstats: {this.props.sumaDePowerStats} </h4>
        <h4>
          Cantidad de Miembros con orientacion buena :
          {this.props.cantMiembrosconOrientacionBuena}
        </h4>
        <h4>
          Cantidad de Miembros con orientacion mala :
          {this.props.cantMiembrosconOrientacionMala}
        </h4>
      </div>
    );
  }
}

export default MyTeam;
