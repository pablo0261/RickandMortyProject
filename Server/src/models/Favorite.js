const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      status:{
         type: DataTypes.ENUM('Dead', 'Alive', 'unknown')
      },
      species:{
         type: DataTypes.STRING,
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull:false
      },
      origin:{
         type: DataTypes.STRING,
      },
      image:{
         type: DataTypes.STRING,
      }
   }, { timestamps: false });
};
