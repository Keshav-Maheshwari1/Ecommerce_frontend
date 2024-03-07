import React, { useState } from 'react'
import { URI } from '../connection/boot';
import axios from 'axios';
import { useUserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';

export default function Login() {
        const {setDisplayUser} = useUserContext()
        const [formData, setFormData] = useState({
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
        try{
                const response = await axios.post(URI+"/signIn", formData)
                console.log(response)
                if(response.status === 202){
                        setDisplayUser({
                                username: response.data,
                                email:formData.email
                        })
                        navigate('/api/users/payment')
                }
                if(response.status === 400){
                        window.alert("Incorrect Password");
                }
                else if(response.status === 409){
                        window.alert("Email Not Exists");
                }
                
        }catch(error){
                console.log(error);
        }
        setFormData({
                email: '',
                password: '',
        });
  };
  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#020014e7]">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
            <p className="mt-4 text-gray-600">
              <a href="/api/users/reset" className="text-blue-500">Forget password</a>
            </p>
          </form>
          <p className="mt-4 text-gray-600">
            Don't have an account? <a href="/api/users/register" className="text-blue-500">Create an account</a>.
          </p>
        </div>
      </div>
  )
}
