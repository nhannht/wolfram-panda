// Import path
const path = require('path');

module.exports = {
    entry: './content_script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'content_script.bundle.js'
    }
}
