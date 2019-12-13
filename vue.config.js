const path = require('path');

module.exports = {
    assetsDir: '',
    baseUrl: '',
    publicPath: undefined,
    outputDir: path.resolve(__dirname, 'app/templates'),
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,
    index: path.resolve(__dirname, 'app/templates/index.html'),
};