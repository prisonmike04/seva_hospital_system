const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');  // Import cors
const mysql = require('mysql2'); // Import MySQL2

const Users = require('./routes/users');
const Patient = require('./routes/users/Patient/patient');
const Employee = require('./routes/users/Employee/employee');
const Doctor = require('./routes/users/Doctor/docter');
const Admin = require('./routes/users/Administrator/admin');
const superAdmin = require('./routes/users/Administrator/superAdmin');
const api = require('./routes/api/api');

const app = express();

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Jay22oct', // Replace with your MySQL password
    database: 'hospitalmanagementsystem' // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Make the `db` connection globally available
app.set('db', db);

// Enable CORS for all routes
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/users', Users);
app.use('/patient', Patient);
app.use('/employee', Employee);
app.use('/doctor', Doctor);
app.use('/admin', Admin);
app.use('/super', superAdmin);
app.use('/api', api);

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route for React frontend
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'An internal server error occurred' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
