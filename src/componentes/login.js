import React from "react";
//css
import "../assets/login.css";
//imagen
import logo from "../logo.jpg";
//
import axios from "axios";
import ApiUrl from "../services/apirest";

class login extends React.Component {
  state = {
    form: {
      email: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  controllerSubmit2 = (e) => {
    e.preventDefault();
  };

  controllerChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  controllerButton = () => {
    let url = ApiUrl;
    axios.post(url, this.state.form).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={logo} width="100px" id="icon" alt="User Icon" />
            </div>
            <form onSubmit={this.contollerSubmit2}>
              <input
                type="text"
                className="fadeIn second"
                name="usuario"
                placeholder="Usuario"
                onChange={this.onChange}
              />
              <input
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Log In"
                onClick={this.controllerButton}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default login;
