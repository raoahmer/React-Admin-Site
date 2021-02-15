import "./App.css";
// import ButtonAppBar from './components/AppBar';
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      {/* <ButtonAppBar/> */}
      {
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>

            <Route exact path="/Student">
              <Student />
            </Route>

            <Route exact path="/SignIn">
              <SignIn />
            </Route>

            <Route exact path="/Map">
              <Map />
            </Route>

            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
