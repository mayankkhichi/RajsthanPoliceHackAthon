const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'YourDatabaseName',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database!');
    connection.release();
  }
});

// Sample query to retrieve data from the Social table
pool.query('SELECT * FROM Social', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.message);
  } else {
    console.log('Data from Social table:', results);
  }
});

// Sample query to insert data into the Social table
const newSocialRecord = {
  fraud_type: 'Phishing',
  address: '123 Main St',
  date_of_frauds: '2024-01-17',
  complain_id: 1 // Assuming you have a complain_id to link with
};

pool.query('INSERT INTO Social SET ?', newSocialRecord, (error, results, fields) => {
  if (error) {
    console.error('Error inserting data into Social table:', error.message);
  } else {
    console.log('Inserted a new record into Social table.');
  }
});

// Close the connection pool when your application is shutting down
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) console.error(err);
    console.log('Database connection pool closed.');
    process.exit();
  });
});
