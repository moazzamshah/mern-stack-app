const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorMiddleware');
const goalRoutes = require('./routes/goalRoutes');
const connectDB = require('./config/db');

connectDB();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`server started at ${port}`));
