module.exports = function(sequelize, DataTypes) {
    var Watchlist = sequelize.define('Watchlist', {
    }, {
        associate: function(models) {
            Watchlist.hasMany(models.Post);
            Watchlist.belongsTo(models.User);
        }
    });

    return Watchlist;
}
