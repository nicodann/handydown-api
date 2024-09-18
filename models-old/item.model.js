module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    offered: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Item
};