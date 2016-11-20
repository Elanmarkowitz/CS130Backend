module.exports = function(sequelize, DataTypes) {
    var Watchlist = sequelize.define('Watchlist', {
        notify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        associate: function(models) {
            Watchlist.hasMany(models.Post);
            Watchlist.belongsTo(modles.User);
        }
    });

    return Watchlist;
}
