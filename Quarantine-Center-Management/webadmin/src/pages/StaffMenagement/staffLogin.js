/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - staffLogin
    Last Update - 11/10/2021
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginScreen() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [staffMembers, setStaffMembers] = useState([])
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const Swal = require('sweetalert2');

    async function Login() {
        const user = { username, password }
        axios.post('http://localhost:8000/staffLogin/staffLogin/', user)
            .then(response => {
                console.log(response)
                if (response.data == null) {
                    Swal.fire({
                        title: 'Login Failed!',
                        text: 'Username or Password incorrect',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
                else {
                    if (response.data.accountStatus == "Pending") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setStaffMembers(response.data)
                        alert("First Login")
                        setTimeout(() => { window.location.href = `/staffFirstLogin/${response.data.employeeId}` }, 2000);
                    }
                    else if (response.data.accountStatus == "Active") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setStaffMembers(response.data)
                        alert("Active Account")
                        setTimeout(() => { window.location.href = `/staffLandingPage/${response.data.employeeId}` }, 2000);
                    }
                    else {
                        Swal.fire({
                            title: 'Login Failed!',
                            text: 'Username or Password incorrect',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                        });
                    }


                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login Failed',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            });
    };

    return (

        <div>
            <div class="account-page">
                {loading}
                <div className="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-6 login-left">
                        <img src="assets/img/login-banner.png" style={{ height: 500, widows: 500 }} class="img-fluid" alt="Doccure Login" />
                    </div>
                    <div className="col-md-12 col-lg-4 login-right">
                        <h2 style={{ fontSize: '35px', marginTop: '5px' }}> Login </h2><br />


                        <div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Username</label>
                                <input required type='username'
                                    className="form-control"
                                    placeholder="Enter Your Username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Password</label>
                                <input required type='password'
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </div><br />



                            <button onClick={Login}
                                className="btn btn-success btn-block btn-lg login-btn"
                                style={{ marginTop: '15px' }}><i className="far fa-check-square" /> Login
                            </button>

                        </div>


                    </div>

                </div>
            </div><br /><br /><br />
        </div>
    );
}

export default LoginScreen;