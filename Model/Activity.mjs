import DataTypes from 'sequelize'
import sequelize from '../connection.mjs'

const Activity = sequelize.define(
  'Activity',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrementIdentity: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'client_email'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  })

export default Activity
