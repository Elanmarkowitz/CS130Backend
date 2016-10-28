module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('location', {
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    });
    return Location;
}
