const chalk = require('chalk');
const inquirer = require('./lib/inquirer');
const figlet = require('figlet');
const clear = require('clear');
const files = require('./lib/files');

clear();

console.log(
  chalk.cyan(figlet.textSync('CLE-ARCH', { horizontalLayout: 'full' }))
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repo.'));
}

(async () => {
  const dbOption = await inquirer.selectDb();
  console.log(dbOption);
  switch ({ database }) {
    case 'Sequelize ORM':
      return console.log('Sequelize orm selected.');
    case 'Mongoose ODM':
      genrateCode('mongoose');
  }
})();
