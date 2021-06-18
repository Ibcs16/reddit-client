module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src', __dirname],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@components/(.*)': '<rootDir>/src/components/$1'
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */
  ]
};
