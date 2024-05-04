export class UpdateActivityDTO {
    id_activity: number;
    nom?: string;
    min_personne?: number;
    max_personne?: number;
    prix_par_personne?: number;
    description?: string;

    constructor(id_activity: number, nom?: string, min_personne?: number, max_personne?: number, prix_par_personne?: number, description?: string) {
        this.id_activity = id_activity;
        this.nom = nom;
        this.min_personne = min_personne;
        this.max_personne = max_personne;
        this.prix_par_personne = prix_par_personne;
        this.description = description;
    }
}
