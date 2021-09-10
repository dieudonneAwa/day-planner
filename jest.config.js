const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/pages'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['.', 'src', 'node_modules'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.tsx'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
