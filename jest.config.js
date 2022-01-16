const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleDirectories: ['./node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.ts',
        '\\.svg': '<rootDir>/__mocks__/svg.ts',
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'babel-jest',
    },
}

module.exports = config
