module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '.*': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
