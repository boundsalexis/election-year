module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.TEXT,
            validate: {
                len: [1,300]
            }
        }
    });

    Comment.associate = models => {
        models.Comment.belongsTo(models.User, {as: "user"})
    }
    return Comment;
}