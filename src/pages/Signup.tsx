import React, { useState } from 'react';
import axios from 'axios';

const GarbaCommitteeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    regestrationNumber: '',
    roomNo: '',
    location: '',
    phoneNumber: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      console.log(formData);
      
      const response = await axios.post('https://backend.nandeeshkhant3205.workers.dev/api/v1/user/signup', formData);
      alert(`Form submitted successfully !`);
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      alert("fill correctly !")
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-6">GARBA COMMITTEE RECRUITMENT 2024</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="registrationNumber">Registration Number</label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.regestrationNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="roomNo">Room No</label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="roomNo"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="location">Location</label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button

            // onClick={()=>{
            //   axios.post('https://backend.nandeeshkhant3205.workers.dev/api/v1/user/signup', formData)
              
              
            //   ;
            // }}

            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GarbaCommitteeForm;
