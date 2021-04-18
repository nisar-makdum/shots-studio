import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Admin from './components/Dashboard/Admin/Admin';
import HandleServices from './components/Dashboard/HandleServices/HandleServices';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/checkOut/:title">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/handle">
            <HandleServices/>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <AllOrders/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
