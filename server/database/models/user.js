module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      /*id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },*/
      username: { 
        type: DataTypes.STRING, 
        unique: true,
        allowNull: false 
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      /*favorites: { 
        type: DataTypes.JSON 
      }*/
    },
    {
      timestamps: false
    }
  );

  return User;
};
