import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components 
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import Register from './components/UserManagement/Register';

//import Register from "./components/UserManagement/Test";
import Home from './components/UserManagement/Home';
import Login from './components/UserManagement/Login';
import ProfileDetails from "./components/UserManagement/ProfileDetails";
import EditProfile from './components/UserManagement/EditProfile';
import { Provider } from 'react-redux';
import AllFood from "../../webclient/src/pages/FoodManagement/AllFood";
import FoodAdmin from "../../webclient/src/pages/FoodManagement/FoodAdmin";

import FoodCart from "../../webclient/src/pages/FoodManagement/FoodCart";
import AllOrders from "../../webclient/src/pages/FoodManagement/AllOrders";
import OrderAdmin from "../../webclient/src/pages/FoodManagement/OrderAdmin";
import Favourites from "../../webclient/src/pages/FoodManagement/Favourites";

import Booking from './components/RoomManagement/Booking';
import BookingView from './components/RoomManagement/BookingView';
import Feedback from './components/RoomManagement/Feedback';

/* Janith Gamage On - 11/10/2021  */
import HomePage from "./pages/FinanceManagement/Fhome";
import Checkout from "./pages/FinanceManagement/Fcheckout";
import Payment from "./pages/FinanceManagement/Fpayment";
import Invoice from "./pages/FinanceManagement/Finvoice";
import Inquary from './pages/FinanceManagement/Finquary';
//pages
import addTicket from './pages/TicketManagement/addTicket'; //--Added by Vishara Prabuddhi--
import formLandingPage from './pages/TicketManagement/formLandingPage'; //--Added by Vishara Prabuddhi--
// import viewMyTicket from './pages/TicketManagement/viewMyTicket'; //--Added by Vishara Prabuddhi--
//import Login from "./pages/Common/Loginexaple";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/*<Route path="/login" exact component={Login} />*/}
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/Profile" exact component={ProfileDetails} />
          {/*<Route path="/edit/:id" component={EditProfile} />*/}
          {/* Janith */}
          {/* <Route path="/login" exact component={Login} /> */}

          {/* Chamodh */}
          <Route path="/allFood" exact component={AllFood} />
          <Route path="/foodadmin" exact component={FoodAdmin} />
          <Route path="/allOrders" exact component={AllOrders} />
          <Route path="/foodCart" exact component={FoodCart} />
          <Route path="/orderAdmin" exact component={OrderAdmin} />
          <Route path="/favourites" exact component={Favourites} />

          {/* Janith Gamage On - 11/10/2021   */}
          <Route path="/hometest" exact component={HomePage} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/invoice" exact component={Invoice} /> 
          <Route path="/inquary" exact component={Inquary} />

          {/* vishara */}
          <Route path="/addticket" exact component={addTicket}/> 
          <Route path="/formLandingPage" exact component={formLandingPage}/> 
          
          
          <Route path="/booking" component={ Booking } />
          <Route path="/bookingView" component={ BookingView } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
