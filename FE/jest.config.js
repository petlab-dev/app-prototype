module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
