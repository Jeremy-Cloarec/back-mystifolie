export const UsersModel = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    })
}