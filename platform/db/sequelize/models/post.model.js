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
        }
    }, {
        associate: function(models) {
            Post.belongsTo(models.User);
        }
    }, {
        associate: function(models) {
            Post.hasOne(models.Location)
        }
    });
    return Post;
}
