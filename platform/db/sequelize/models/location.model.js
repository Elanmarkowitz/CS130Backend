module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('Location', {
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
