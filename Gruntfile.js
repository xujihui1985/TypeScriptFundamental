/*global module:false*/
module.exports = function(grunt) {

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
     typescript: {
      base: {
        src: ['TypeScriptFundamental/scripts/*.ts'],
        dest: 'TypeScriptFundamental/output',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          base_path: 'TypeScriptFundamental/scripts',
          sourcemap: false,
          fullSourceMapPath: false,
          declaration: false,
        }
      }
    },
    watch: {
      files: ['TypeScriptFundamental/scripts/*.ts'],
      tasks:['typescript']
    }
  });



  // Default task.
  grunt.registerTask('default', ['watch']);

};
