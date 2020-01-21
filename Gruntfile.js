module.exports = function (grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: true,
          use: [ require('bootstrap-stylus') ]
        },
        files: [{
          expand: true,
          cwd: 'stylus',
          src: [ '*.styl' ],
          dest: 'public/dist/css',
          ext: '.css',
        }]
      }
    },

    watch: {
      stylus: {
        files: ['stylus/*.styl'],
        tasks: ['stylus']
      },

      livereload: {
        options: {
          livereload: true
        },
        files: [ 'public/dist/css/*.css', 'public/*.html' ],
      }
    },

    clean: {
      all: [ 'public/dist', 'public/*.html' ]
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['stylus']);
};
