export class CreateActivityDTO {
    nom: string;
    min_personne: number;
    max_personne: number;
    prix_par_personne: number;
    description: string;

    constructor(nom: string, min_personne: number, max_personne: number, prix_par_personne: number, description: string) {
        this.nom = nom;
        this.min_personne = min_personne;
        this.max_personne = max_personne;
        this.prix_par_personne = prix_par_personne;
        this.description = description;
    }
}
