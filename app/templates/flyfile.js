process.env.OUTNAME = '<%= camelModuleName %>';
process.env.OUTFILE = '<%= moduleName %>.js';
module.exports = require('browser-module-env/flyfile');
