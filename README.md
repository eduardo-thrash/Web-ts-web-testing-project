```
npm init -y
```

npm i @serenity-js/assertions @serenity-js/console-reporter @serenity-js/core @serenity-js/mocha @serenity-js/rest @serenity-js/serenity-bdd mocha

npm i @types/mocha @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser cross-env eslint eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn eslint-plugin-unused-imports http-server mkdirp npm-failsafe rimraf tiny-types ts-node typescript --save-dev

keywords (package.json) : palabras clave para referenciar el proyecto

engines (package.json) : versiones compatibles en el proyecto

tsc --init

npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

echo "" > tsconfig.eslint.json

echo "18" > .nvmrc
Es un archivo de configuración utilizado en combinación con NVM (Node Version Manager).

echo "check-leaks: false
color: true
diff: true
full-trace: true
reporter: '@serenity-js/mocha'
require:
  - ts-node/register
  - spec/support/serenity.config.ts
spec: 'spec/**/*.spec.ts'
timeout: 5000
v8-stack-trace-limit: 100" > .mocharc.yml
Es un archivo de configuración para Mocha

echo "" > .gitignore

echo "" > .gitattributes

echo "" > .eslintrc.js

mkdir src

mkdir spec
