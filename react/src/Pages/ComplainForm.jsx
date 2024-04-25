// Form.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ComplainForm.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateTime: '',
    description: '',
    frauderMobile: '',
    frauderEmail: '',
    fraudType: '',
    typeOfHacking: '',
    affectedAccountNumber: '',
    transactionAmount: '',
    paymentMethod: '',
    address: '',
    dob: '',
    attachments: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input (attachments), use files
    const inputValue = type === 'file' ? files[0] : value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleFraudTypeChange = (selectedFraudType) => {
    setFormData({
      ...formData,
      fraudType: selectedFraudType,
      typeOfHacking: '',
      affectedAccountNumber: '',
      transactionAmount: '',
      paymentMethod: '',
      address: '',
      dob: '',
      attachments: null,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Simulate sending a request to the backend to save the complaint data using Axios
  //     const response = await axios.post('/api/save-complaint', formData);

  //     // Check if the request was successful
  //     if (response.status === 200) {
  //       console.log('Complaint data submitted successfully!');
  //     } else {
  //       // Handle errors or log a message if the submission fails
  //       console.error('Failed to submit complaint data:', response.status, response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting complaint data:', error.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint where your backend is expecting the data
      const response = await axios.post('/api/save-complaint', formData);

      // Check if the request was successful
      if (response.status === 200) {
        console.log('Complaint data submitted successfully!');
      } else {
        console.error('Failed to submit complaint data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting complaint data:', error.message);
    }
  };
  

  return (
    <div className="form-container">
    <h1 className="form-title">Complaint Form</h1>
    <form className="complaint-form">

      {/* Common Fields */}
      <div className="grid grid-cols-2 gap-4  Main">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
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
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateTime" className="block text-sm font-medium text-gray-600">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="col-span-2 mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="frauderMobile" className="block text-sm font-medium text-gray-600">
            Frauder Mobile
          </label>
          <input
            type="tel"
            id="frauderMobile"
            name="frauderMobile"
            value={formData.frauderMobile}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="frauderEmail" className="block text-sm font-medium text-gray-600">
            Frauder Email
          </label>
          <input
            type="email"
            id="frauderEmail"
            name="frauderEmail"
            value={formData.frauderEmail}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>

      {/* Fraud Type Dropdown */}
      <div className="mb-4">
        <label htmlFor="fraudType" className="block text-sm font-medium text-gray-600">
          Type of Fraud
        </label>
        <select
          id="fraudType"
          name="fraudType"
          value={formData.fraudType}
          onChange={(e) => handleFraudTypeChange(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="">Select Fraud Type</option>
          <option value="hacking">Hacking</option>
          <option value="social">Social</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Conditional Rendering Based on Fraud Type */}
      {formData.fraudType === 'hacking' && (
        <>
          <div className="mb-4">
            <label htmlFor="typeOfHacking" className="block text-sm font-medium text-gray-600">
              Type of Hacking
            </label>
            <select
              id="typeOfHacking"
              name="typeOfHacking"
              value={formData.typeOfHacking}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Type</option>
              <option value="unauthorizedTransaction">Unauthorized Transaction</option>
              <option value="creditCard">Credit Card</option>
              <option value="scam">Scam</option>
              <option value="otherHacking">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="affectedAccountNumber" className="block text-sm font-medium text-gray-600">
              Affected Account Number
            </label>
            <input
              type="text"
              id="affectedAccountNumber"
              name="affectedAccountNumber"
              value={formData.affectedAccountNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="transactionAmount" className="block text-sm font-medium text-gray-600">
              Transaction Amount
            </label>
            <input
              type="text"
              id="transactionAmount"
              name="transactionAmount"
              value={formData.transactionAmount}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-600">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="upi">UPI</option>
            </select>
          </div>
        </>
      )}

      {formData.fraudType === 'social' && (
        <>
          <div className="mb-4">
            <label htmlFor="fraudType" className="block text-sm font-medium text-gray-600">
              Fraud Type
            </label>
            <select
              id="fraudType"
              name="fraudType"
              value={formData.fraudType}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Fraud Type</option>
              <option value="phishing">Phishing</option>
              <option value="onlineScam">Online Scam</option>
              <option value="otherSocial">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="attachments" className="block text-sm font-medium text-gray-600">
              Attachments (PDF or JPG)
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              accept=".pdf, .jpg, .jpeg"
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </>
      )}

      {formData.fraudType === 'other' && (
        <>
          {/* Fields for Other Fraud */}
          {/* ... (Add other fraud fields) */}
        </>
      )}
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-md"
      >
        Submit Complaint
      </button>
    </div>
     
  );
  
};

export default Form;
