# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Настройка проекта

1. Создаём приложение npx create-react-app my-app
2. Устанавливаем npm i react-router-dom
3. npm i bootstrap импортируем стили в index.js import 'bootstrap/dist/css/bootstrap.css'
4. npm i -g eslint
5. Добавим некоторые настройки в .eslintrc.js:
   module.exports = {
   env: {
   browser: true,
   es2021: true
   },
   extends: ['plugin:react/recommended', 'standard'],
   overrides: [],
   parserOptions: {
   ecmaVersion: 'latest',
   sourceType: 'module'
   },
   plugins: ['react'],
   rules: {
   indent: [0, 2, { SwitchCase: 1 }],
   semi: [2, 'never'],
   'space-before-function-paren': [
   'error',
   { anonymous: 'always', named: 'never' }
   ],
   quotes: [
   'error',
   'single',
   {
   allowTemplateLiterals: true,
   avoidEscape: true
   }
   ],
   'multiline-ternary': ['off'],
   'no-trailing-spaces': ['error', { skipBlankLines: true }]
   }
   }

   а также в .prettierrc.js:
   module.exports = {
   trailingComma: 'none',
   tabWidth: 2,
   semi: false,
   singleQuote: true,
   jsxSingleQuote: true
   }

6. Добавим в файл package.json строчку в scripts "format": "npx prettier --write ." :
   "scripts": {
   "start": "react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject",
   "format": "npx prettier --write ."
   }

7. Установить PropTypes npm i prop-types
   import PropTypes from 'prop-types'
   Pagination.propTypes = {
   itemsCount: PropTypes.number.isRequired,
   pageSize: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired,
   currentPage: PropTypes.number.isRequired,
   }

8.
