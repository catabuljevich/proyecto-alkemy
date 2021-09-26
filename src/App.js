import React from "react";
import "./index.css";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import TeamPage from "./pages/TeamPage";
import { LoginContext } from "./Helper/Context";
import { useState } from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/stroe";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const store = generateStore();
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
