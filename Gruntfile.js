module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      deps: {
        src: [
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'bower_components/angular/angular.min.js',
              'bower_components/angular-route/angular-route.min.js',
              'bower_components/ui-bootstrap-0.13.4.min.js',
              'bower_components/ngGallery/src/js/ngGallery.js',
              'node_modules/angular-youtube-embed/src/angular-youtube-embed.js'
          ],
        dest: 'build/js/vendors.js'
      },
      js: {
        //src: ['js/main.js', 'js/controllers/*.js', 'js/directives/*.js', 'js/services/*.js'],
        src: ['js/main.js',
              'js/modules.js',
              'js/configs.js',
              'js/**/*.js'],
        dest: 'build/js/scripts.js',
      },
      move: {
        files: [
          {
            src: ['bower_components/angularjs/angular.min.js.map'],
            dest: 'build/js/angular.min.js.map'
          },
          {
            src: ['bower_components/angular-route/angular-route.min.js.map'],
            dest: 'build/js/angular-route.min.js.map'
          }
        ]
      },
    },
    sass: {
      dist: {
        files: {
          'build/css/styles.css': 'css/main.scss'
        }
      }
    },
    uglify:{
      dist:{
        files:{
          'build/js/scripts.min.js':['build/js/scripts.js']
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
        require('autoprefixer')({
            browsers: 'last 2 versions'
          }), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
      },
      dist: {
        src: 'build/css/styles.css'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/**/**/*.js'],
        tasks: ['concat:js','uglify']
      },
      sass: {
        files: ['css/**/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['sass', 'concat', 'postcss:dist','uglify', 'watch']);
};