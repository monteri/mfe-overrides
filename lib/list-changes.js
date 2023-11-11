const chalk = require('chalk');
const getChangedFiles = require('../utils/getChangedFiles');
const IGNORED_FILES = require('../utils/ignoredFiles');

function listChanges() {
  console.log(chalk.blue('Changes in the repository:'));

  getChangedFiles((changedFiles) => {
    // Filter out ignored files
    const filteredFiles = changedFiles.filter((file) => !IGNORED_FILES.includes(file));

    if (filteredFiles.length === 0) {
      console.log(chalk.yellow('No changes found.'));
    } else {
      filteredFiles.forEach((file) => {
        console.log(`- ${file}`);
      });
    }
  });
}

module.exports = listChanges;
