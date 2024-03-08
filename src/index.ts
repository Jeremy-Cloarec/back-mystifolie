// Importing routes activities
import findActivitie from './routes/activities/findActivities'
import findAllActivitie from './routes/activities/findAllActivities'
import createActivitie from './routes/activities/createActivitie'
import updateActivitie from './routes/activities/updateActivities'
import deleteActivitie from './routes/activities/deleteActivities'

// Importing projet route
import getProject from './routes/getProject'

//Importing project dependancies
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'

//Importing .env validation
import validateEnv from '@utils/validateEnv'

//Importing initDB for connexion
import {initDB} from './db/sequelize'

//App Variables 
dotenv.config()

validateEnv();

//intializing the express app 
const app = express(); 

//initializing db
initDB()

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())

// Routes 
// project
getProject(app)
// Activities
findActivitie(app)
findAllActivitie(app)
createActivitie(app)
updateActivitie(app)
deleteActivitie(app)

//exporting app
module.exports = app