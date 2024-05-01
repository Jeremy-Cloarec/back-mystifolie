// Importing projet route
import getProject from './routes/getProject'

//Importing project dependancies
import * as dotenv from 'dotenv'
import express from 'express'
import favicon from 'serve-favicon'
import cors from 'cors'
import helmet from 'helmet'

//Importing routes
import activityRoute from './routes/Activity'

//Importing .env validation
//import validateEnv from '@utils/validateEnv'

//Importing DB
import { ConnectionDB, SynchroniseDB } from './db/sequelize'
import path from 'path'

//App Variables 
dotenv.config()

//validateEnv();

//intializing the express app 
const app = express();

//initializing db
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


// project
getProject(app)


//exporting app
module.exports = app