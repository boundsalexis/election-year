module.exports = function (sequelize, DataTypes) {
    var Donor = sequelize.define("Donor", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        }

    });
    Donor.associate = models => {
        models.Donor.hasMany(models.Comment, {
            onDelete: "cascade"
        })
    }
    return Donor;
}