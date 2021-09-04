import React from "react";
import "./index.css";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import TeamPage from "./pages/TeamPage";
import { LoginContext } from "./Helper/Context";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route
              path="/search"
              component={() => <SearchPage loggedIn={false} />}
            />
            <Route
              path="/team"
              component={() => <TeamPage loggedIn={false} />}
            />
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
