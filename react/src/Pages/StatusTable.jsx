import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you are using axios for API calls
import './StatusTable.css'; // Import the CSS file for styling

const StatusTable = () => {
  const [complaints, setComplaints] = useState([]);

  // Fetch data from the backend API (replace 'YOUR_API_ENDPOINT' with the actual endpoint)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='new'>
    <div className="status-table-container">
      <table>
        <thead>
          <tr>
            <th>Complaint Id</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.ComplainId}>
              <td>{complaint.ComplainId}</td>
              <td>{complaint.ComplainStatus}</td>
              <td>{complaint.ComplainDescri}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default StatusTable;
