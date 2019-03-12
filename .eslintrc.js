/**
 * @see https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb 
 * */

module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'standard',
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
    },
    ecmaFeatures: {
        jsx: true,  // Allows for the parsing of JSX
    },
    rules: {
        'emotion/jsx-import': 'error',
        'emotion/no-vanilla': 'error',
        'emotion/import-from-emotion': 'error',
        'emotion/styled-import': 'error'
    },
    settings: {
        react: {
            version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    plugins: ['emotion']
};
