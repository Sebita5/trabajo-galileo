import { Model, DataTypes } from 'sequelize';

export default class curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        horario: DataTypes.STRING,
        idMateria: DataTypes.INTEGER,
        idProfesor: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Curso',
      }
    );
  }
}