import React, { useState } from 'react'
import axios from 'axios';
import { URI } from '../connection/boot';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(URI+`/payment/${amount*100}`);
      
      if(response.status === 202){
        window.alert("Payment received")
        console.log(response)
        navigate("/")
      }
      

    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-8 bg-gray-100 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
    <form onSubmit={handlePayment}>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
          Amount (INR):
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Initiate Payment
      </button>
    </form>
  </div>
  )
}
