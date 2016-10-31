module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('post', {
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
        associate: function(models){
          Post.belongsTo(models.User);
        }
    });
    return Location;
}
