export declare class UpdateActivityDTO {
    id_activity: number;
    nom?: string;
    min_personne?: number;
    max_personne?: number;
    prix_par_personne?: number;
    description?: string;
    constructor(id_activity: number, nom?: string, min_personne?: number, max_personne?: number, prix_par_personne?: number, description?: string);
}
