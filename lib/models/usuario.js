import { Model, DataTypes } from 'sequelize';

export default class rol extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        idRol: DataTypes.INTEGER,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        mail: DataTypes.STRING,
        dni: DataTypes.STRING,
        pass: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );
  }
}