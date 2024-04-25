// Import other dependencies and styles
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './login.css'

const Login = () => {
  const [complaintId, setComplaintId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just log the values for now
    console.log('Complaint ID:', complaintId);
    console.log('Mobile Number:', mobileNumber);
    console.log('OTP:', otp);
  };

  const handleSendOtp = async () => {
    // Add logic to send OTP to the provided mobile number
    // For simplicity, let's just log a message for now
    try {
      // Simulate sending a request to the backend to send OTP using Axios
      const response = await axios.post('/api/send-otp', {
        mobileNumber,
      });

      // Check if the request was successful
      if (response.status === 200) {
        setIsOtpSent(true);
        console.log('OTP sent successfully!');
      } else {
        // Handle errors or log a message if the OTP sending fails
        console.error('Failed to send OTP:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    }
    console.log('OTP sent to', mobileNumber);

  };

  return (
    <div className="min-h-screen flex items-center justify-center box">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md MainBox">
        <h2 className="text-2xl font-bold mb-4">LOGIN</h2>

        <div className="mb-4">
          <label htmlFor="complaintId" className="block text-sm font-medium text-gray-600">
            COMPLAIN ID
          </label>
          <input
            type="text"
            id="complaintId"
            name="complaintId"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
            PASSWORD
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>



        <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={handleLogin}
              className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-md"
            >
              LOGIN
            </button>
           <a></a>
          
        </div>
        
      </div>
    </div>
  );
};

export default Login;

