import React from 'react';
import { Form , Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [vaccinations, setVaccinations] = useState([]);
  const [isError, setError] = useState(false);
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
    e.preventDefault();
  
    if (!(/^\d{9}$/.test(user.userId)) ||
      !(/^0[1-9][0-9]{8}$/.test(user.userMobilePhone)) ||
      ((user.userPhone.length>0)&& !(/^0[1-9][0-9]{7}$/.test(user.userPhone)))) 
    {
      setError(true);
      alert("One of the fields is incorrect");
    } else {
      setError(false); 
      setUser((prev) => ({
        ...prev,
        userVaccinations: vaccinations,
      }));
      console.log(vaccinations);
      console.log(user);
      axios
        .post("/create", user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  
      navigate("users");
    }
  };
  

  return (
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      <h1>Create user page</h1>
      <Form onSubmit={createUser}>
      <Form.Control
            name="firstName"
            pattern='[A-Za-z]+'
            value={user.firstName}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="firstName*"
            required
          />
          <Form.Control
            onChange={handleChange}
            name="lastName"
            required
            value={user.lastName}
            style={{ marginBottom: "1rem" }}
            placeholder="lastName*"
          />
             <Form.Control
            onChange={handleChange}
            name="userId"
            value={user.userId}
            style={{ marginBottom: "1rem" }}
            placeholder="userId*"
            required
          />
             <Form.Control
            onChange={handleChange}
            name="userCity"
            value={user.userCity}
            style={{ marginBottom: "1rem" }}
            placeholder="userCity"
          />
           <Form.Control
            onChange={handleChange}
            name="userStreet"
            value={user.userStreet}
            style={{ marginBottom: "1rem" }}
            placeholder="userStreet"
            
          />
            <Form.Control
            onChange={handleChange}
            name="userStreetNumber"
            value={user.userStreetNumber}
            style={{ marginBottom: "1rem" }}
            placeholder="userStreetNumber"
            
          />
          <label>Date Of Birth   : </label>
          <Form.Control
            onChange={handleChange}
            name="userDateOfBirth"
            value={user.userDateOfBirth}
            style={{ marginBottom: "1rem" }}
            placeholder="userDateOfBirth*"
            type='date'
            min="1923-01-01"
            max="2023-05-05"
            required
          />
          <Form.Control
            onChange={handleChange}
            name="userPhone"
            value={user.userPhone}
            pattern="\d{9}"
            style={{ marginBottom: "1rem" }}
            placeholder="userPhone "
          />
          <Form.Control
            onChange={handleChange}
            name="userMobilePhone"           
            value={user.userMobilePhone}
            style={{ marginBottom: "1rem" }}
            placeholder="userMobilePhone*"
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
            <Form.Control
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
          disabled = {!user.firstName | !user.lastName | !user.userId | !user.userDateOfBirth | !user.userMobilePhone}
          type='submit'
        >
          CREATE USER
        </Button>
         </Form>
    </div>
  );
}

export default CreateUser;
