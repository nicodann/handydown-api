// curtousy of https://github.com/sequelize/umzug/issues/24#issuecomment-591313032

// const {Umzug, SequelizeStorage} = require('umzug');
// const db = require('./models');

// const migrateAndSeed = async () => {
//   const sequelize = db.sequelize;
//   const Sequelize = db.Sequelize;
//   console.log("sequelize:", sequelize)
  

//   const migrationsConfig = {
//     storage: new SequelizeStorage({sequelize}),
//     storageOptions: {
//       sequelize: sequelize
//       // modelName: 'SequelizeMeta' // No need to specify, because this is default behaviour
//     },
//     migrations: {
//       glob: 'migrations/*.js',
//       resolve: ({name, path,context}) => {
//         const migration = require(path || '')
//         return {
//           name,
//           up: async () => migration.up(context, Sequelize),
//           down: async () => migration.down(context, Sequelize),
//         }
//       }
//     },
//     context: sequelize.getQueryInterace(),
//     logger: console,
//   };

//   // const seedsConfig = {
//   //   storage: new SequelizeStorage({sequelize}),
//   //   storageOptions: {
//   //     sequelize: models.sequelize,
//   //     sequelizeData: 'SequelizeData' // No need to specify, because this is default behaviour
//   //   },
//   //   migrations: {
//   //     glob: 'seeders/*.js',
//   //     resolve: ({name, path,context}) => {
//   //       const migration = require(path || '')
//   //       return {
//   //         name,
//   //         up: async () => migration.up(context, Sequelize),
//   //         down: async () => migration.down(context, Sequelize),
//   //       }
//   //     }
//   //   },
//   //   context: models.sequelize.getQueryInterace(),
//   //   logger: console,
//   // };
  
//   var migrator = new Umzug(migrationsConfig);
//   var seeder = new Umzug(seedsConfig);

//   await migrator.up();
//   return await seeder.up();
// }


// // module.exports = () => migrator.up().then(() => seeder.up())
// module.exports = migrateAndSeed;