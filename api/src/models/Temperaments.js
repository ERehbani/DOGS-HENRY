const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperaments', {
        id: {
            type: DataTypes.UUID,
            defatulValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}