module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/__tests__/*.ts',
  ],
  moduleNameMapper: {
    '^nimma/legacy$': '<rootDir>/node_modules/nimma/dist/legacy/cjs/index.js',
    '^nimma/fallbacks$': '<rootDir>/node_modules/nimma/dist/legacy/cjs/fallbacks/index.js',
    '^@stoplight/spectral-ruleset-bundler/(.*)$': '<rootDir>/node_modules/@stoplight/spectral-ruleset-bundler/dist/$1'
  }
};
