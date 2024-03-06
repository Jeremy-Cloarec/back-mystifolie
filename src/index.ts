import findActivitie from './routes/activities/findActivities';
import findAllActivitie from './routes/activities/findAllActivities';
import createActivitie from './routes/activities/createActivitie';
import updateActivitie from './routes/activities/updateActivities';
import deleteActivitie from './routes/activities/deleteActivities';

//Importing project dependancies
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'



//Importing .env validation
import validateEnv from '@utils/validateEnv'

//App Variables 
dotenv.config()

validateEnv();

//intializing the express app 
const app = express(); 

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())

// Routes 
findActivitie(app)
findAllActivitie(app)
createActivitie(app)
updateActivitie(app)
deleteActivitie(app)

//exporting app
module.exports = app