// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/src/tests/out',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['lcov', 'cobertura'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],

  // Use this configuration option to add custom reporters to Jest
  reporters: ['default', ['jest-junit', { outputDirectory: '<rootDir>/src/tests/out/' }]],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
  },
};
