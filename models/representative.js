module.exports = function (sequelize, DataTypes) {
    var Representative = sequelize.define("Representative", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        district: {
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
    Representative.associate = models => {
        models.Representative.hasMany(models.Donor)
        models.Representative.hasMany(models.Comment, {
            onDelete: "cascade"
        })
    }
    return Representative;
}