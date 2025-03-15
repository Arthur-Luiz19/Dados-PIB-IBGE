// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest", // Para transformar código JSX e ESM
    },  
    extensionsToTreatAsEsm: [".tsx", ".jsx"],
  };