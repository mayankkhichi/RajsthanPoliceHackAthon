import { Routes, Route } from 'react-router-dom';
// import ChatBotPage from './Pages/ChatBotPage';
import Login from './Pages/Login';
import './App.css'; // Import your CSS file for styling
import Dashboard from './Pages/Dashboard';
import axios from "axios";
import ComplainForm from './Pages/ComplainForm';
import Status from './Pages/StatusTable';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {


  return (
  <>   
    <Routes>
      <Route index element={<Dashboard/>} />
      {/* <Route path="/chatbot" element={<ChatBotPage/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<ComplainForm/>} />
      <Route path="/Status" element={<Status/>} />
    </Routes>

    </>
  )
}

export default App;


