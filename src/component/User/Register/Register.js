import React,{useState} from 'react';

import RegisterUI from './RegisterUI';


function Register() {

  const [newUser, setNewUser]=useState({username:"", password:"", cPassword:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, cPassword } = newUser;
    
    if (username === "" || password === "" || cPassword === "") {

      alert('All Field are required')

    }

    else {
      (password === cPassword) ? alert(newUser)
        : alert('invalid user')
    }

  }
  return <RegisterUI handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default Register;