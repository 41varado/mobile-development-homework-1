import DataTypes from 'sequelize'
import sequelize from '../connection.mjs'

const Client = sequelize.define(
  'Client',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'phone_number'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  })

export default Client
