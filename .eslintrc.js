module.exports = {
  extends: '@danielwerg/eslint-config',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json'
  }
};
