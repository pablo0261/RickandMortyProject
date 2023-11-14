const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const User = sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         auntoIncrement: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, { timestamps: false });
   return User;
};
