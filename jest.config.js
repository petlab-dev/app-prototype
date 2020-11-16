module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    '@testing-library/jest-dom/extend-expect',
  ],
  transformIgnorePatterns: [],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  globals: {
    window: {},
  },
  snapshotSerializers: ['jest-emotion'],
};
