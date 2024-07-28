const sequelize = require('./Config/db.js');
const User = require('./Models/users.js');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    // const users = await User.findAll();
    // console.log('All users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
