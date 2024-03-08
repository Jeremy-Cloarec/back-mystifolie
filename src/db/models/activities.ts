
export function pokemon (sequelize,DataTypes){
    return sequelize.define('Activitie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        adress: {
            type: DataTypes.STRING
        },
        cp: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.ENUM()
        },
        hp: {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        attack: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        sp_attack: {
            type: DataTypes.INTEGER
        },
        sp_defense: {
            type: DataTypes.INTEGER
        },
        captured: {
            type: DataTypes.INTEGER
        },
        evolution_url: {
            type: DataTypes.STRING
        },
        evolution_chain: {
            type: DataTypes.STRING
        }
    }, {
        timestamps:true,
        createdAt: 'created',
        uptdateAt: true
    });
}

