const express = require('express'); // Import the Express library to create a web server
const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3000; // Define the port to listen on, using an environment variable or defaulting to 3000

app.get('/', (req, res) => { // Define a route for the root URL
  res.send('API is running!'); // Send a simple response when the root URL is accessed
});

app.listen(PORT, () => { // Start the server and listen on the defined port
  console.log(`Server is running on port ${PORT}`); // Log a message to the console when the server starts
});

