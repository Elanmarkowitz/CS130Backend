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
            type: DataTypes.DOUBLE
        }
    }, {
        associate: function(models) {
            Post.belongsTo(models.User);
            Post.hasOne(models.Location);
        }
    });
    return Post;
}
