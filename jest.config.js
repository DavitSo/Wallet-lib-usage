module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: [
    'node_modules', 'src', '<rootDir>',
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
};
