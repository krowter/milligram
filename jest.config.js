const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['./node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};

module.exports = config;
