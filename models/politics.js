module.exports= function(sequelize, DataTypes){
    var placeholder = sequelize.define("HoldsPlacce",{
        text: DataTypes.STRING
    });
return placeholder;
}