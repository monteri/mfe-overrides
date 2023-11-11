const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

async function installFrontendBuild(gitRepoUrl) {
  const cloneDir = 'frontend-build';
  const repoExists = await directoryExists(path.join(process.cwd(), cloneDir));
  const nodeModulesExists = await directoryExists(path.join(process.cwd(), 'node_modules'));

  // Skip cloning if the repository already exists
  if (!repoExists) {
    console.log(chalk.blue(`Cloning repository from ${gitRepoUrl} to ${cloneDir}...`));
    try {
      await runCommand(`git clone ${gitRepoUrl} ${cloneDir}`, process.cwd());
      console.log(chalk.green(`Repository cloned successfully.`));
    } catch (error) {
      console.error(chalk.red(`Error: Failed to clone the repository. ${error}`));
      process.exit(1);
    }
  } else {
    console.log(chalk.yellow(`Repository already exists. Skipping cloning step.`));
  }

  // Skip removing node_modules if it doesn't exist
  if (nodeModulesExists) {
    console.log(chalk.blue(`Removing node_modules directory...`));
    try {
      await fs.rm(path.join(process.cwd(), 'node_modules'), { recursive: true, force: true });
      console.log(chalk.green(`node_modules directory removed successfully.`));
    } catch (error) {
      console.error(chalk.yellow(`Warning: Failed to remove some files in node_modules directory. Continuing with the installation...`));
    }
  } else {
    console.log(chalk.yellow(`node_modules directory not found. Skipping removal step.`));
  }

  // Install @edx/frontend-build
  console.log(chalk.blue(`Installing @edx/frontend-build...`));
  try {
    await runCommand(`npm install --save-dev @edx/frontend-build@file:./${cloneDir}`, process.cwd());
    console.log(chalk.green(`@edx/frontend-build installed successfully.`));
  } catch (error) {
    console.error(chalk.red(`Error: Failed to install @edx/frontend-build. ${error}`));
    process.exit(1);
  }

  console.log(chalk.green('Installation completed successfully.'));
}

function runCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        reject(chalk.red(stderr || error.message));
      } else {
        console.log(chalk.gray(stdout)); // Log the command output in gray
        resolve(stdout.trim());
      }
    });
  });
}

async function directoryExists(directoryPath) {
  try {
    await fs.access(directoryPath);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = installFrontendBuild;
