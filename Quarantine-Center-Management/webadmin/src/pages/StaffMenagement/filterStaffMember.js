/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect, setState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {

    const [staffMembers, setStaffMembers] = useState([])
    const [wordEntered, setWordEntered] = useState("");

    //Fetch All staff Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                // console.log(response)
                setStaffMembers(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Filter Staff Member
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.firstName.toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchStaffMembers();
                } else {
                    setStaffMembers(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchStaffMembers();
    }, [])

    return (
        <div>
            <h1 align="center">Staff Members</h1>
            <br />
            <form style={{ marginTop: '40px', marginLeft: '40px' }}>
                <input
                    type="text"
                    placeholder="Search.."
                    value={wordEntered}
                    onChange={handleFilter}
                />
            </form>
            <br />
            <table responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px' }}>
                <thead>
                    <tr>
                        <th >#</th>
                        <th >Employee ID</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Employee Type</th>
                        <th >NIC Number</th>
                        <th >Email Address</th>
                        <th >Mobile Number</th>
                        <th >Added At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {staffMembers.map((staffMembers, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>

                            <a href={`/singleProfile/${staffMembers.employeeId}`} style={{ textDecoration: 'none' }}>
                                <td>{staffMembers.employeeId}</td>
                            </a>

                            <td>{staffMembers.firstName}</td>
                            <td>{staffMembers.lastName}</td>
                            <td>{staffMembers.type}</td>
                            <td>{staffMembers.NIC}</td>
                            <td>{staffMembers.email}</td>
                            <td>{staffMembers.mobileNumber}</td>
                            <td>{staffMembers.createdAt}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default App;