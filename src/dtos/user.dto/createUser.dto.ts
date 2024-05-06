export class CreateUserDTO {
    nom: string;
    mdp: string;
    mail: string;

    constructor(nom: string, mdp: string, mail: string) {
        this.nom = nom;
        this.mdp = mdp;
        this.mail = mail;
    }
}
