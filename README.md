# MFE CLI

This CLI tool provides commands for managing micro-frontends (MFE) in your project.

## Usage

Install dependencies globally:

`npm install -g mfe-overrides`

## Commands

### 1. Commit

Commit changes in the specified path to a version control system.

```bash
mfe-cli commit <path>
<path>: The path to the changes you want to commit.
```

### 2. List Changes
List changes in the repository.


```bash
Copy code
mfe-cli list-changes
```

### 3. Apply Overrides
Apply changes from the specified overrides path to the current project.


```bash
Copy code
mfe-cli apply-overrides <path>
<path>: The path to the overrides changes.
```

### 4. Install Frontend Build
Clone a Git repository, remove the node_modules directory, and install @edx/frontend-build from the local repository.

```bash
Copy code
mfe-cli install-frontend-build <git_repo_url>
<git_repo_url>: The Git URL of the repository to clone.
```
