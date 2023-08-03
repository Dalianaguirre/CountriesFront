import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import ActivityCreate from "./components/ActivityCreate/ActivityCreate"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path='/activities' component={ActivityCreate}/>
              <Route exact path='/countries/:id' component={Detail}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/' component={LandingPage}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
