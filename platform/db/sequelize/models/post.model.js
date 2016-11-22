module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        },
        longitude: {
            type: DataTypes.DOUBLE
        },
        latitude: {
            type: DataTypes.DOUBLE
        }
    }, {
        associate: function(models) {
            Post.belongsTo(models.User);
            Post.belongsToMany(models.Watchlist, {through: 'WatchlistPost'});
        }
    });
    return Post;
}
