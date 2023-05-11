import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [numVaccinationsInputs, setNumVaccinationsInputs] = useState(0);
  const [vaccinations, setVaccinations] = useState([]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    userCity: "",
    userStreet: "",
    userStreetNumber: "",
    userDateOfBirth: "",
    userPhone: "",
    userMobilePhone: "",
    userVaccinations : [] , 
    dateOfRecovery : '' , 
    dateOfOnsetOfIllness : '' , 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddVaccination = () => {
    if (vaccinations.length < 4) {
      setVaccinations([...vaccinations, { type: "", date: "" }]);
    }
  };

  const handleVaccinationChange = (index, field, value) => {
    const updatedVaccinations = [...vaccinations];
    updatedVaccinations[index][field] = value;
    setVaccinations(updatedVaccinations);
    console.log(updatedVaccinations)
  };

  const createUser = (e) => {
     setUser(user.userVaccinations = vaccinations )
    console.log(vaccinations) ; 
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      userVaccinations: vaccinations,
    })
    );
    console.log(user)
    axios
      .post("/create", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("users");
  };
  

  return (
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      <h1>Create user page</h1>
      <Form>
      <Form.Control
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="firstName"
            required
          />
          <Form.Control
            onChange={handleChange}
            name="lastName"
            required
            value={user.lastName}
            style={{ marginBottom: "1rem" }}
            placeholder="lastName"
          />
             <Form.Control
            onChange={handleChange}
            name="userId"
            required
            value={user.userId}
            style={{ marginBottom: "1rem" }}
            placeholder="userId"
          />
             <Form.Control
            onChange={handleChange}
            name="userCity"
            required
            value={user.userCity}
            style={{ marginBottom: "1rem" }}
            placeholder="userCity"
          />
           <Form.Control
            onChange={handleChange}
            name="userStreet"
            required
            value={user.userStreet}
            style={{ marginBottom: "1rem" }}
            placeholder="userStreet"
          />
            <Form.Control
            onChange={handleChange}
            name="userStreetNumber"
            required
            value={user.userStreetNumber}
            style={{ marginBottom: "1rem" }}
            placeholder="userStreetNumber"
          />
          <label>Date Of Birth   : </label>
          <Form.Control
            onChange={handleChange}
            name="userDateOfBirth"
            required
            value={user.userDateOfBirth}
            style={{ marginBottom: "1rem" }}
            placeholder="userDateOfBirth"
            type='date'
          />
          <Form.Control
            onChange={handleChange}
            name="userPhone"
            value={user.userPhone}
            style={{ marginBottom: "1rem" }}
            placeholder="userPhone"
          />
          <Form.Control
            onChange={handleChange}
            name="userMobilePhone"
            required
            value={user.userMobilePhone}
            style={{ marginBottom: "1rem" }}
            placeholder="userMobilePhone"
          />
          <label>Date Of Onset Of Illness : </label>
          <Form.Control
            onChange={handleChange}
            name="dateOfOnsetOfIllness"
            value={user.dateOfOnsetOfIllness}
            style={{ marginBottom: "1rem" }}
            placeholder="dateOfOnsetOfIllness"
            type = 'date'
          />
          <label>Date Of Recovery : </label>
          <Form.Control
            onChange={handleChange}
            name="dateOfRecovery"
            value={user.dateOfRecovery}
            style={{ marginBottom: "1rem" }}
            placeholder="dateOfRecovery"
            type = 'date'
          />
        <Button onClick={handleAddVaccination}>Add Vaccination</Button>
        {vaccinations.map((vaccination, index) => (
          <div key={index}>
            <select
              name={`vaccination-type-${index}`}
              onChange={(e) =>
                handleVaccinationChange(index, "type", e.target.value)
              }
            >
              <option value="Fizer">Fizer</option>
              <option value="Moderna">Moderna</option>
            </select>
            <input
              type="date"
              name={`vaccination-date-${index}`}
              onChange={(e) =>
                handleVaccinationChange(index, "date", e.target.value)
              }
            />
          </div>
        ))}
        <Button
          onClick={createUser}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          CREATE USER
        </Button>
         </Form>
    </div>
  );
}

export default CreateUser;
