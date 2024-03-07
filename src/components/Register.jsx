// import axios from 'axios'
import React, { useState } from 'react'

import '../index.css'
import axios from 'axios';
import { URI } from '../connection/boot';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/User';


export const Register = () => {
      const { setDisplayUser } = useUserContext();
      const [formData, setFormData] = useState({
            username: '',
            email: '',
            password: '',
      });
      const navigate = useNavigate();
        
      const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
            ...prevData,
            [name]: value,
      }));
      };
        
      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            
            try {
                  const response = await axios.post(URI + "/create", formData);
                  if(response.status === 201){

                        setDisplayUser({
                              username: response.data,
                              email:formData.email
                        })
                        console.log(response);
                        navigate('/api/users/payment')
                  }else if(response.status === 409){
                        window.alert("User ID ALready Exists Try Login!")
                  }
            } catch (error) {
                  console.log("Error:", error);
            }
            
            setFormData({
                  username: '',
                  email: '',
                  password: '',
      });
      };
        
      return (
      <div className="min-h-screen flex items-center justify-center bg-[#020014e7]">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username
                  </label>
                  <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  />
            </div>
            <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  />
            </div>
            <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                  </label>
                  <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  />
            </div>
            <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
            Register
            </button>
            </form>
            <p className="mt-4 text-gray-600">
                  Already a User? <a href="/api/users/login" className="text-blue-500">Sign In</a>.
            </p>
            </div>
      </div>
  )
}
