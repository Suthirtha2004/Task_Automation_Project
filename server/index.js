const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authrouter = require('./App/Router/authRoutes');
const userRouter = require('./App/Router/userRoutes')
const taskRouter = require('./App/Router/taskRoutes');
const cron = require('node-cron');
const { cronStatusChecker } = require('./App/CronJob/cronJob');
require('dotenv').config();

// Validate environment variables
if (!process.env.DBURL) {
    console.error('❌ Error: DBURL is not defined in .env file');
    process.exit(1);
}

// MIDDLEWARE
app.use(cors());
app.use(express.json());

//Cron Job Scheduler
cron.schedule("*/10 * * * * *",()=>{
    cronStatusChecker();
})
app.use('/team', authrouter);
app.use('/team/user',userRouter);
app.use('/team/task',taskRouter);

// MongoDB Connection
mongoose.connect(process.env.DBURL)
    .then(() => {
        const port = process.env.PORT || 5020;
        app.listen(port, () => {
            console.log(`✅ Server is running on port ${port}`);
        });
    })
    .catch((err) => console.log('❌ MongoDB connection error', err));
