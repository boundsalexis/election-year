module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 100]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 20]
            }
        }

    });

    return Login;

}