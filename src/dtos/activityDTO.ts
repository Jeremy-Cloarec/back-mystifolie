export class ActivityDTO {
    constructor(nom, min_personne, max_personne, prix_par_personne, description) {
        this.nom = nom;
        this.min_personne = min_personne;
        this.max_personne = max_personne;
        this.prix_par_personne = prix_par_personne;
        this.description = description;
    }
}