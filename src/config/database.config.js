import Sequelize from 'sequelize';


// const uri = "mariadb://username:password@localhost:3306/database_name";
const uri = process.env.MARIADB_URI || 'mariadb://root@localhost:3306/popcars';

const initDb = async () => {
  try {
    const sequelize = new Sequelize(uri);
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (e) {
    console.error('oh oh problem:', e);
  }



};


export default initDb;
