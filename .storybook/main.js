module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    addons: ['@storybook/addon-essentials', 'storybook-css-modules-preset'],
    babel: async (options) => {
        options.plugins.push('babel-plugin-inline-react-svg')
        return options
    },
}
