const inquirer = require('inquirer');

const cliOptions = {
  name: 'database',
  type: 'list',
  message: 'select ODM || ORM: ',
  choices: ['Mongoose ODM', 'Sequelize ORM'],
};

module.exports = {
  selectDb: () => {
    return inquirer.prompt(cliOptions);
  },
  selectAuth: () => {},
};
