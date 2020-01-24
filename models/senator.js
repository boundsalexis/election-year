module.exports = function (sequelize, DataTypes) {
    var Senator = sequelize.define("Senator", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        memberId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Senator.associate = models => {
        models.Senator.hasMany(models.Donor)
        models.Senator.hasMany(models.Comment, {
            onDelete: "cascade"
        })
    }
    return Senator;
}