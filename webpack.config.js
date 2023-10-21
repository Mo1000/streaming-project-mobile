var path = require('node:path');

module.exports = {
    resolve: {
        extensions: ['.js','jsx', '.json', '.ts', '.tsx', '.css', '.scss'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
        },
    },
};