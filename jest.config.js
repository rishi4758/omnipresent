module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: [
      '**/__tests__/integration-test/**/*.+(ts|tsx|js)',
      '**/__tests__/unit-test/**/*.+(ts|tsx|js)',
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  };
  