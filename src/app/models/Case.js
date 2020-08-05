import { Model, Sequelize, DataTypes } from 'sequelize';

class Case extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        date: Sequelize.DATE,
        state: Sequelize.STRING,
        count: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Case;
