import { Link } from 'react-router-dom';
import './style.css';

function Dashboard() {

  return ( 
    <div>
      <div style={{fontFamily:'fantasy',fontSize:'xxx-large',color:'black',position:'fixed', zIndex:1,top:'10px'}}>CyberSolvers

                  </div>
    <nav className="navbar">
      <div className="right-links">
        <ul>
        <li>
          <Link to="/dashboard"><button>Home</button></Link>
        </li>
          
          <li>
            <Link to="/login"><button>Login</button></Link>
          </li>
          <li>
            <Link to="/register"><button>Register</button></Link>
          </li>
          <li>
            <a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer"><button>
          Chatbot
          </button>
        </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="ask-to-query items-center">
<p style={{ color: 'white', fontWeight: 'bold', fontSize: '50px', textAlign: 'center', position:'absolute',left:'70%',top:'90%' }}>
Ask Any Query
</p>



<button
style={{
textAlign: 'center',
padding: '7px', // Adjust the padding as need70
backgroundColor: 'aquamarine',
color: 'black',
top:'25%',
left:'69%',
border: 'none',
borderRadius: '7px',
cursor: 'pointer',
margin: '7px auto', // Center the button horizontally and adjust the vertical margin
position:'absolute',
fontWeight: 'bold',
width:'25%',
fontSize:'xx-large',
}}
>
<a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e"  style={{textDecoration: 'none',color:'black'}}>
          GET A GUIDENCE
        </a>    

</button>

<button
style={{
textAlign: 'center',
padding: '7px', // Adjust the padding as need70
backgroundColor: 'aquamarine',
color: 'black',
top:'35%',
left:'69%',
border: 'none',
borderRadius: '7px',
cursor: 'pointer',
margin: '7px auto', // Center the button horizontally and adjust the vertical margin
position:'absolute',
fontWeight: 'bold',
width:'25%',
fontSize:'xx-large',
}}
>
<Link to="/login" style={{textDecoration: 'none',color:'black'}}>
          CHECK STATUS
        </Link>    

</button>

</div>
</div>
);
}

export default Dashboard;
