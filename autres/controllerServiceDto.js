// activityRequestDTO.js
export class ActivityRequestDTO {
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        // Autres champs requis pour créer ou mettre à jour une activité
    }
}

// activityResponseDTO.js
export class ActivityResponseDTO {
    constructor(activity) {
        this.id = activity.id;
        this.name = activity.name;
        this.description = activity.description;
        // Autres champs de l'activité à inclure dans la réponse
    }
}

// activityController.js
import { activityService } from '../services/activityService';
import { ActivityRequestDTO } from '../dto/activityRequestDTO';
import { ActivityResponseDTO } from '../dto/activityResponseDTO';

export const activityController = {
    post: async (req, res) => {
        try {
            const activityDTO = new ActivityRequestDTO(req.body);
            const activity = await activityService.createActivity(activityDTO);
            const responseDTO = new ActivityResponseDTO(activity);
            res.json(responseDTO);
        } catch (error) {
            console.log('Oups ! Unable to create activity in the database', error);
            res.status(500).send('Internal Server Error');
        }
    },
    // Autres méthodes du contrôleur utilisant les DTO
};

// activityService.js
import { Activity } from '../db/sequelize';
import { ActivityRequestDTO } from '../dto/activityRequestDTO';

export const activityService = {
    createActivity: async (activityDTO) => {
        try {
            const activityData = new ActivityRequestDTO(activityDTO);
            const activity = await Activity.create(activityData);
            return activity;
        } catch (error) {
            throw new Error('Unable to create activity in the database');
        }
    },
    // Autres méthodes du service utilisant les DTO
};

// project/
// |-- controllers/
// |   |-- activityController.js
// |-- services/
// |   |-- activityService.js
// |-- dto/
// |   |-- activityRequestDTO.js
// |   |-- activityResponseDTO.js
// |-- db/
// |   |-- sequelize.js
// |-- models/
// |   |-- activityModel.js
// |-- routes/
// |   |-- activityRoutes.js
// |-- app.js



