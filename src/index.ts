// Importing projet route
import getProject from './routers/getProject.router'

//Importing project dependancies
import * as dotenv from 'dotenv'
import express from 'express'
import favicon from 'serve-favicon'
import cors from 'cors'
import helmet from 'helmet'

//Importing routes
import activityRoute from './routers/activity.router'
import userRoute from './routers/user.router'
import userReservation from './routers/reservation.route'

//Importing DB
import { ConnectionDB, SynchroniseDB } from './databases/sequelize'

//Path for the favicon
import path from 'path'

//App Variables 
dotenv.config()

//Intializing the express app 
const app = express();

//Initializing db
ConnectionDB()

// Synchronize db
SynchroniseDB()

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(favicon(path.join(__dirname, 'favicon.ico')))

// Routes 
app.use('/activity/', activityRoute)
app.use('/user/', userRoute)
app.use('/reservation/', userReservation)

// project
getProject(app)

//exporting app
module.exports = app