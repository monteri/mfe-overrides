# MFE CLI

This CLI tool provides commands for managing micro-frontends (MFE) in your project.

## Usage

Install dependencies globally:

`npm install -g mfe-overrides`

## Commands

### 1. Commit
Можна робити зміни в MFE і потім використати цю команду, щоб перенести усі змінені/додані файли за вказаним шляхом. Ідея, щоб вказати `frontend-build/overrides`  і автоматично буде створено дерево відповідно до MFE, в якій йде робота.

```bash
mfe-cli commit <path>
<path>: The path to the changes you want to commit.
```

### 2. List Changes
Перелік ченжів в MFE (для перегляду перед `commit`).

```bash
Copy code
mfe-cli list-changes
```

### 3. Apply Overrides
Зворотній процес до `commit`, щоб скопіювати/створити файли, які знаходяться в overrides


```bash
Copy code
mfe-cli apply-overrides <path>
<path>: The path to the overrides changes.
```

### 4. Install Frontend Build
Clone a Git repository, remove the node_modules directory, and install @edx/frontend-build from the local repository.
Вставляємо `url` форкнутого білда і він встановиться в MFE і в `package.json` вкажеться шлях до нього. Далі можна робити зміни.

```bash
Copy code
mfe-cli install-frontend-build <git_repo_url>
<git_repo_url>: The Git URL of the repository to clone.
```
