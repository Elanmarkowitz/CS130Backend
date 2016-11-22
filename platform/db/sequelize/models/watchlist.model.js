module.exports = function(sequelize, DataTypes) {
    var Watchlist = sequelize.define('Watchlist', {
    }, {
        associate: function(models) {
            Watchlist.belongsToMany(models.Post, {through: 'WatchlistPost'});
            Watchlist.belongsTo(models.User);
        }
    });

    return Watchlist;
}
