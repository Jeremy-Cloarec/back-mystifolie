export class UpdateUserDTO {
    id_user: number;
    nom?: string;
    mdp?: string;
    mail?: string;

    constructor(id_user: number, nom: string, mdp: string, mail: string) {
        this.id_user = id_user;
        this.nom = nom;
        this.mdp = mdp;
        this.mail = mail;
    }
}

