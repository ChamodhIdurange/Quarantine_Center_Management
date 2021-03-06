import React, { Component } from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartImage from "../cartImage";
import { logout } from '../../UserManagement/Session';
import ProfileDetails from "../../UserManagement/ProfileDetails";

function Header() {
  var user = JSON.parse(localStorage.getItem("currentUser"));
  function logoutbtn() {
    logout();
    localStorage.removeItem("currentUser")
    window.location.href = "/login"
  }
  // const user = JSON.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null

  function ProfileDetails() {
    window.location.href = "/Profile"
  }

  return (
    <div>
      <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="index.html" class="navbar-brand logo">
              <img src="/assets/img/logo.png" class="img-fluid" alt="Logo" />
            </a>
          </div>
          <div class="main-menu-wrapper">
            <div class="menu-header">
              <a href="index.html" class="menu-logo">
                <img src="/assets/img/logo.png" class="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" class="menu-close" href="javascript:void(0);">
                <i class="fas fa-times"></i>
              </a>
            </div>
            <ul class="main-nav">
              <li class="has-submenu">
                <a href="#">
                  Payment <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li class="active">
                    <a href={"/hometest"}>Home</a>
                  </li>
                  <li>
                    <a href={"/checkout"}>Checkout</a>
                  </li>
                  <li>
                    <a href={"/invoice"}>Invoice</a>
                  </li>
                  <li>
                    <a href={"/inquary"}>Inquary</a>
                  </li>
                  <li>
                    <a href={'/payment'}>Payment</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  User Management <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href={"/home"}>Home</a>
                  </li>
                  <li>
                    <a href={"/register"}>Registration</a>
                  </li>
                  <li>
                    <a href={"/login"}>Login</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  Room Management <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href={"/bookingView"}>Available Rooms</a>
                  </li>
                  <li>
                    <a href={"/booking"}>Booking</a>
                  </li>
                  <li>
                    <a href={"/feedback"}>Feedback</a>
                  </li>

              </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  Patients <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li class="has-submenu">
                    <a href="#">Doctors</a>
                    <ul class="submenu">
                      <li>
                        <a href="map-grid.html">Map Grid</a>
                      </li>
                      <li>
                        <a href="map-list.html">Map List</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="search.html">Search Doctor</a>
                  </li>
                  <li>
                    <a href="doctor-profile.html">Doctor Profile</a>
                  </li>
                  <li>
                    <a href="booking.html">Booking</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="booking-success.html">Booking Success</a>
                  </li>
                  <li>
                    <a href="patient-dashboard.html">Patient Dashboard</a>
                  </li>
                  <li>
                    <a href="favourites.html">Favourites</a>
                  </li>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li>
                    <a href="profile-settings.html">Profile Settings</a>
                  </li>
                  <li>
                    <a href="change-password.html">Change Password</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  Foods <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <Link to={"/allFood"}>Foods Home</Link>
                  </li>
                  {/* <li>
                      <Link to={"/orderAdmin"}>Order Details</Link>
                    </li> */}
                  {/* <li>
                      <Link to={"/foodadmin"}>Foods Admin</Link>
                    </li> */}
                  <li>
                    <Link to={"/allOrders"}>Past Orders</Link>
                  </li>

                  <li>
                    <Link to={"/favourites"}>Favourites</Link>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  Pages <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li>
                    <a href="search.html">Search Doctors</a>
                  </li>
                  <li>
                    <a href="calendar.html">Calendar</a>
                  </li>
                  <li>
                    <a href="components.html">Components</a>
                  </li>
                  <li class="has-submenu">
                    <a href="invoices.html">Invoices</a>
                    <ul class="submenu">
                      <li>
                        <a href="invoices.html">Invoices</a>
                      </li>
                      <li>
                        <a href="invoice-view.html">Invoice View</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blank-page.html">Starter Page</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#">
                  Tciket Management <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <a href="#">
                    Ticket <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="submenu">
                    <li>
                      <a href="/addticket">Add Ticket</a>
                    </li>
                    <li>
                      <a href="">View My Ticket</a>
                    </li>
                  </ul>
                 </ul> 
              </li>
              <li class="has-submenu">
                <a href="#">
                  Blog <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#" target="_blank">
                  Admin <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="admin/index.html" target="_blank">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="pharmacy/index.html" target="_blank">
                      Pharmacy Admin
                    </a>
                  </li>
                </ul>
              </li>
              <li class="login-link">
                <a href={"/Login"}>Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul class="nav header-navbar-rht">
            <li class="nav-item contact-item">
              <Link to={"/foodCart"}>
                <div
                  className="input-group-append btn btn-outline-primary"
                  style={{ marginRight: "30px", borderRadius: "20px" }}
                >
                  <CartImage />
                </div>
              </Link>
              <div class="header-contact-img">
                <i class="far fa-hospital"></i>
              </div>
              <div class="header-contact-detail">
                <p class="contact-header">Contact</p>
                <p class="contact-info-header"> +1 315 369 5943</p>
              </div>
            </li>

            {user ? (<div className="dropdown show"><a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {user.uName}
            </a><div className="dropdown-menu" aria-labelledby="dropdownMenuLink"><a class="dropdown-item" href={`/profile`}>Profile</a>
                <a class="dropdown-item" onClick={logoutbtn}>Logout</a></div></div>) : (<>
                  <li class="nav-item">
                    <a class="nav-link header-login" href={"/login"}>
                      login / Signup
                    </a>
                  </li>
                </>)}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
