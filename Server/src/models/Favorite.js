const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const Favorite = sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      status:{
         type: DataTypes.ENUM('Dead', 'Alive', 'Undefined')
      },
      species:{
         type: DataTypes.STRING,
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'Unknown')
      },
      origin:{
         type: DataTypes.STRING,
      },
      image:{
         type: DataTypes.BLOB,
      }
   }, { timestamps: false });

   return Favorite;
};
