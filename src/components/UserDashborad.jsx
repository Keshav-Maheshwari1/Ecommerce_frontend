import React, { useState } from 'react'

export default function UserDashborad() {
        const [formData, setFormData] = useState({
                email: '',
                password: '',
              });
            
              const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                // Add your login logic here
                console.log('Logon button clicked! Add your login logic.');
                console.log(formData)
              };
            
  return (
        <div className="min-h-screen flex items-center justify-center bg-[#020014e7]">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

        </form>

        <div className="mt-8">
          <button
            className="w-full bg-red-500 text-white p-3 rounded focus:outline-none hover:bg-red-600"
            type="submit"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
