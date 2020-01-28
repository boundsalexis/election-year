module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be atleast 3 characters in length"
                }
            }
        },
        location: {
            type: DataTypes.STRING
        }
    });

    User.associate = models => {
        models.User.hasOne(models.Login, {
            onDelete: "cascade"
        })
    }
    return User;
}