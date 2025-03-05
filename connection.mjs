import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('prueba', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

// const Client = sequelize.define(
//   'Client',
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     phone_number: {
//       type: DataTypes.BIGINT,
//       allowNull: false
//     }
//   },
//   {
//     freezeTableName: true,
//     timestamps: false
//   })

// const Activity = sequelize.define(
//   'Activity',
//   {
//     id: {
//       type: DataTypes.NUMBER,
//       autoIncrementIdentity: true,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     client_id: {
//       type: DataTypes.STRING,
//       allowNull: true
//     }
//   },
//   {
//     freezeTableName: true,
//     timestamps: false
//   })

export default sequelize
