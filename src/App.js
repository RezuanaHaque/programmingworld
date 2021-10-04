
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Allcourses from './components/Allcourses/Allcourses';
import Services from './components/Services/Services';
import Error from './components/Error/Error';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Aboutus from './components/Aboutus/Aboutus';
import Enrolled from './components/Enrolled/Enrolled';
// import Enrolled from './components/Enrolled/Enrolled';

function App() {
  return (
    <div>

      <Router>
        <Menu></Menu>
        <Switch>
          {/* default */}
          <Route exact path="/">
            <Allcourses></Allcourses>
          </Route>
          {/* home route  */}
          <Route path="/home">
            <Allcourses></Allcourses>
          </Route>
          {/* error  */}
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/enrolledcourses">
            <Enrolled></Enrolled>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;