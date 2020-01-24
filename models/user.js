module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
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