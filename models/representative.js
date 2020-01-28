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
        // adding state as separate column for ease of get reps/sens by state requests
        state: {
            type: DataTypes.STRING,
            allowNull: false
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
        }
    });
    Representative.associate = models => {
        models.Representative.hasMany(models.Donor)
        models.Representative.hasMany(models.Comment, {
            onDelete: "cascade"
        })
        models.Representative.hasOne(models.VotingRecord, {
            onDelete: "cascade"
        })
    }


    return Representative;
}