const express = require('express');
const mongoose = require('mongoose');
const UserRoute = require('./Routes/UserRoute');
const AnnouncementRoute = require('./Routes/AnnouncementRoute'); // Add this line for AnnouncementRoute
const ProfileRoute = require('./Routes/ProfileRoute');  
const LostFoundRoute = require('./Routes/Lost&FoundRoute'); // Add this line for Lost&FoundRoute    
require('dotenv').config();

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
   
    serverSelectionTimeoutMS: 30000,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/user', UserRoute);
app.use('/profile', ProfileRoute); // Add route for profiles
app.use('/announcement', AnnouncementRoute); // Add route for announcements
app.use('/lostfound', LostFoundRoute); // Add route for lost&found

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
