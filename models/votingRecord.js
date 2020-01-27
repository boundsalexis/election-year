module.exports = function (sequelize, DataTypes) {
    var VotingRecord = sequelize.define("VotingRecord", {
        missed_pct: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 100,
                min: 0
            }
        },
        votesWParty_pct: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 100,
                min: 0
            }
        },
        votesWOParty_pct: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 100,
                min: 0
            }
        }
    });
    
    return VotingRecord;
}