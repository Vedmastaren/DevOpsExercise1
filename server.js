// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
// Example GET request
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, world!"})
});


// Example POST request
app.post('/submit', (req, res) => {
    const data = req.body; // Access POST data
  
    // Convert the data to JSON string
    const jsonData = JSON.stringify(data);
  
    // Write data to a text file named messages.txt
    fs.appendFile('messages.txt', jsonData + '\n', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        res.status(500).send('Error saving data');
      } else {
        console.log('Data written to file successfully:', jsonData);
        res.send('Data received and saved successfully!');
      }
    });
  });

// Start the server
const PORT = process.env.PORT || 3000; // Use port from environment variable or 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
