module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),  // Use std node package info
        pkg: {
            name: "holdingName",
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> 1994 */\n'
            },
            build: {
                src: 'test/ppModel.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: [
                    'devenv/**/*.json',
                    'devenv/js/**/*.js',
                    'app/js/**/*.js'
            ],
            options: grunt.file.readJSON('.jshintrc')
        },
        watch: {
            files: [  //B how to reuse "all files" definition
                    'devenv/**/*.json',
                    'devenv/js/**/*.js',
                    'app/js/**/*.js'
            ],
            tasks: ['jsbeautifier', 'jshint' /*, 'simplemocha'*/]
        },
        /* from other app
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },

            all: {
                src: ['test/**           <nospace>        /*.js']
            }
        
        },*/
        jsbeautifier: {
            // files: ["test/**/*.js"]
            files: [  //B how to reuse "all files" definition
                    'devenv/**/*.json',
                    'devenv/js/**/*.js',
                    'app/js/**/*.js'
            ]
        }
    });

    // Load the plugin that provides the task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    // Default task(s).
    grunt.registerTask('default', ['jshint']);

};
