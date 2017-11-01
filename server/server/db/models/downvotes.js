module.exports = (sequelize, DataTypes) => {
  const Downvotes = sequelize.define('Downvotes', {
    recipeid: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  });
  Downvotes.associate = (models) => {
    Downvotes.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'userd',
    });
  };

  return Downvotes;
};
