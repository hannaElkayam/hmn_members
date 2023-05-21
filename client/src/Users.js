import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      {users ? (
        <>
         {users.map((user) => (
      <div style={{ border: '1px solid black', padding: '5px' }} key={user._id}>
        <div>
          <h6>Personal Details:</h6>
          <p>Firs Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>ID: {user.userId}</p>
          <p>City: {user.userCity}</p>
          <p>Street: {user.userStreet}</p>
          <p>Number Street: {user.userStreetNumber}</p>
          <p>Date Of Birth: {user.userDateOfBirth}</p>
          <p>Phone: {user.userPhone}</p>
          <p>Mobile Phone: {user.userMobilePhone}</p>
          <p>Date Of Recovery : {user.dateOfRecovery}</p>
          <p>Date Of Onset Of Illness : {user.dateOfOnsetOfIllness}</p>

        </div>
        <div>
          <h6>Covid 19 Details:</h6>
          {user.userVaccinations.map((vaccination, index) => (
            <div key={index}>
              <p>Manufacturer Name: {vaccination.type}</p>
              <p>Date: {vaccination.date}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
        </>
      ) : ""}
    </div>
  )
}

export default Users ; 