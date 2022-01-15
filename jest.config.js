const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleDirectories: ['./node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js',
    },
}

module.exports = config;
