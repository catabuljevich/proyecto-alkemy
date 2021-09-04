import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import { useContext } from "react";
import TextError from "../assets/TextError";
//css
import "../assets/login.css";
import logo from "../logo.jpg";
import LoginSource from "../api/LoginSource";

const initialValues = {
  usuario: "",
  password: "",
};

const validationSchema = Yup.object({
  usuario: Yup.string().email("Invalid email format").required("Requiered  "),
  password: Yup.string().required("Requiered"),
});

function LoginPage() {
  let history = useHistory();

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const onClick = () => {
    history.push("/team");
    setLoggedIn(true);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} width="100px" id="icon" alt="User Icon" />
          </div>
          <Form>
            <div>
              <Field
                type="text"
                className="fadeIn second"
                name="usuario"
                placeholder="Usuario"
              />
              <ErrorMessage name="usuario" component={TextError} />
            </div>
            <div>
              <Field
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={TextError} />
            </div>
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={onClick}
            />
          </Form>
        </div>
      </div>
    </Formik>
  );
}

export default LoginPage;
