import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './container/header/Header';
// import Header from './components/header/Header';
// import Brand from './components/brand/Brand';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './routers/Login.js';
import Register from './routers/Register.js';


function App() {
  return (
    <div className='app'>
      <div className='gradient-bg'>
       
        <Router>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
          </Switch>
        </Router>
      </div>
      {/* <Brand /> */}
    </div>
  );
}

export default App;
