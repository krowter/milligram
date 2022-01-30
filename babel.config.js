module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    assets: './src/assets',
                    components: './src/components',
                    utils: './src/utils',
                },
            },
        ],
    ],
}
