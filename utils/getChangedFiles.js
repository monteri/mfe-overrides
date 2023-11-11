const simpleGit = require('simple-git');

function getChangedFiles(callback) {
  const git = simpleGit();

  // Use the 'all' option to include untracked files
  git.status(['-u', 'all'], (err, status) => {
    if (err) {
      console.error('An error occurred while checking Git status:', err.message);
      process.exit(1);
    }

    const changedFiles = status.files
      .filter((file) => file.working_dir !== ' ' && file.working_dir !== '?')
      .map((file) => file.path);

    callback(changedFiles);
  });
}

module.exports = getChangedFiles;
