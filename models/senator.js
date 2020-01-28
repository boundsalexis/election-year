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
        },
        // adding party and gender info -IT
        party: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crpid: {
            type: DataTypes.STRING,
        }
    });
    Senator.associate = models => {
        models.Senator.hasMany(models.Donor)
        models.Senator.hasMany(models.Comment, {
            onDelete: "cascade"
        })
        models.Senator.hasOne(models.VotingRecord, {
            onDelete: "cascade"
        })
    }
    return Senator;
}