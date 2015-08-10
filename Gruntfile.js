module.exports = function(grunt){
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      deps: {
          src: [
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'bower_components/angular/angular.min.js',
          ],
          dest: 'built/js/vendors.js'
      },
      js: {
        src: ['js/main.js', 'js/controllers/*.js', 'js/directives/*.js', 'js/services/*.js'],
        dest: 'built/js/scripts.js',
      },
      move: {
          src: ['bower_components/angularjs/angular.min.js.map'],
          dest: 'built/js/angular.min.js.map'
      },
    },
    sass: {    
      dist: {
        files: {                                            
          'built/css/styles.css': 'css/main.scss'         
        }
      }
    },
    watch: {
      options: { 
        livereload: true 
      },
      js: {
        files: ['js/**/**/*.js'],
        tasks: ['concat:js']
      },
      sass: {
        files: ['css/**/*.scss'],
        tasks: ['sass']
      }             
    }
  });  
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['sass','concat','watch']);
};