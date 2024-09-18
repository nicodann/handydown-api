module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Message;
};