// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const app = express();
// const cors = require('cors');

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secretKey = 'Rajasthan Hackathon 1.0';

// const port = 3001;

// // check which route to listen to
// app.use(cors({
//   credentials: true,
//   origin: 'http://localhost:5173',
// }));

// // Create a MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   port: "3006",
//   password: 'hellomysql',
//   database: 'main',
// });

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Function to generate JWT token
// function generateToken(user) {
//   return jwt.sign(user, secretKey, { expiresIn: '1h' });
// }

// // Middleware to verify JWT token
// function verifyToken(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) {
//       return res.status(401).json({ message: 'Failed to authenticate token' });
//     }
//     req.user = user;
//     next();
//   });
// }

// // Register user
// app.post('/register', (req, res) => {
//   const { FirstName, LastName, EmailId, AdharId, ContactNumber, Address, Pincode, City, pwd } = req.body;

//   bcrypt.hash(pwd, 10, (err, hashedPassword) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error hashing password' });
//     }

//     const user = {
//       FirstName,
//       LastName,
//       EmailId,
//       AdharId,
//       ContactNumber,
//       Address,
//       Pincode,
//       City,
//       pwd: hashedPassword,
//     };

//     const sql = 'INSERT INTO user SET ?';

//     db.query(sql, user, (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: 'Error registering user' });
//       }

//       const token = generateToken({ EmailId, UserId: result.insertId });
//       res.status(201).json({ message: 'User registered successfully', token });
//     });
//   });
// });

// // Login user
// app.post('/login', (req, res) => {
//   const { EmailId, pwd } = req.body;

//   const sql = 'SELECT * FROM user WHERE EmailId = ?';

//   db.query(sql, [EmailId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error fetching user' });
//     }

//     if (results.length === 0) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const user = results[0];

//     bcrypt.compare(pwd, user.pwd, (err, isMatch) => {
//       if (err) {
//         return res.status(500).json({ message: 'Error comparing passwords' });
//       }

//       if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       const token = generateToken({ EmailId, UserId: user.UserId });
//       res.status(200).json({ message: 'Login successful', token });
//     });
//   });
// });

// // Example protected route using JWT token
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route', user: req.user });
// });


// // Additional routes for handling complains, branches, etc. can be added similarly.

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3601; // Set your desired port

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'loveofmom',
  database: 'Main', // Use your actual database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

app.post('/api/save-complaint', (req, res) => {
  const complaintData = req.body;

  // Insert complaintData into your MySQL database (adjust the SQL query accordingly)
  const query = 'INSERT INTO Complain SET ?';

  connection.query(query, complaintData, (error, results) => {
    if (error) {
      console.error('Error inserting data into MySQL:', error);
      res.status(500).json({ error: 'Failed to save complaint data' });
    } else {
      console.log('Complaint data saved successfully!');
      res.status(200).json({ message: 'Complaint data saved successfully' });
    }
  });
});


// Endpoint to save complaint data
app.post('/save-complaint', (req, res) => {
  const complaintData = req.body;

  // Handle saving data to the appropriate tables based on complaint type (social, hacking, etc.)
  switch (complaintData.fraudType) {
    case 'social':
      saveSocialComplaint(complaintData, res);
      break;
    case 'hacking':
      saveHackingComplaint(complaintData, res);
      break;
    
    default:
      res.status(400).json({ message: 'Invalid complaint type' });
  }
});

// Function to save social complaint data
function saveSocialComplaint(complaintData, res) {
  const { address, dateOfFrauds, complainId, dob, attachments } = complaintData;

  const sql = 'INSERT INTO Social (Address, DateOfFrauds, ComplainId) VALUES (?, ?, ?)';

  db.query(sql, [address, dateOfFrauds, complainId], (err, result) => {
    if (err) {
      console.error('Error saving social complaint data:', err);
      res.status(500).json({ message: 'Error saving social complaint data' });
    } else {
      saveComplaintCommonData(complaintData, res);
    }
  });
}

// Function to save hacking complaint data
function saveHackingComplaint(complaintData, res) {
  const { typeOfHacking, affectedAccountNumber, transactionAmount, paymentMethod, complainId } = complaintData;

  const sql = 'INSERT INTO Hacking (TypeOfHacking, AffectedAccount, TransactionAmount, PaymentMethod, ComplainId) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [typeOfHacking, affectedAccountNumber, transactionAmount, paymentMethod, complainId], (err, result) => {
    if (err) {
      console.error('Error saving hacking complaint data:', err);
      res.status(500).json({ message: 'Error saving hacking complaint data' });
    } else {
      saveComplaintCommonData(complaintData, res);
    }
  });
}

// Function to save common complaint data
function saveComplaintCommonData(complaintData, res) {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    dateTime,
    description,
    frauderMobile,
    frauderEmail,
    fraudType,
    attachments,
  } = complaintData;

  const sql = 'INSERT INTO Complain (FruadTime, ComplainStatus, ComplainDate, ComplainAddress, ComplainDescri, ComplainCity, ComplainPincode, UserId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  // Assuming you have the user ID available, replace 'userId' with the actual user ID
  const userId = 1;

  db.query(
    sql,
    [dateTime, 'active', new Date(), address, description, 'city', 'pincode', userId],
    (err, result) => {
      if (err) {
        console.error('Error saving common complaint data:', err);
        res.status(500).json({ message: 'Error saving common complaint data' });
      } else {
        res.status(200).json({ message: 'Complaint data saved successfully' });
      }
    }
  );
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


