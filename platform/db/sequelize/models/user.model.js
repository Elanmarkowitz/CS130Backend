module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        }
    }, {
        associate: function(models) {
            User.hasMany(models.Post);
        }
    });

    return User;
}
