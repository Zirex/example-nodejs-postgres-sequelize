import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'sampleNodejs', // db name
    'postgres', // username
    'postgres', // password
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
);

sequelize.authenticate().then(() => {
    console.log('Conexión exitosa');
}).catch(err => {
    console.log(err);
});