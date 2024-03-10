import React, { useState } from 'react'
import axios from 'axios';
import { URI } from '../connection/boot';
import { useNavigate } from 'react-router-dom';
import useRazorpay from 'react-razorpay';

export const Payment = () => {
  const [amount, setAmount] = useState('');
  const [razorpay] = useRazorpay();
  const navigate = useNavigate();
  
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(URI + `/payment/${amount * 100}`);

      if (response.status === 202) {
        console.log(response.data);

        const options = {
          key: "rzp_test_WQqTYmb8APAtaT",
          amount: amount * 100,
          currency: "INR",
          name: "Keshav",
          description: "Test Transaction",
          image: "https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png",
          order_id: response.data,
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
            console.log(response);
          },
          prefill: {
            name: "Keshav",
            email: "maheshwarikeshav029@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "ABC,Delhi",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      
        rzp1.open();
        
      }
      navigate('/');
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
