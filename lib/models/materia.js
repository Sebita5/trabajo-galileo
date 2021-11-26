import { Model, DataTypes } from 'sequelize';

export default class materia extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Materia',
      }
    );
  }
}