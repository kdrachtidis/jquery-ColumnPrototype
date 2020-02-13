module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['*.js', 'docs/*.html', 'docs/*.css', 'sources/**/*.html', 'sources/**/*.js', 'sources/**/*.json', 'sources/**/*.css'],
                tasks: [/*'htmllint',*/ 'htmlmin', 'cssmin', 'jshint', 'uglify', 'minjson']
            }
        },
        htmlmin: {
            dist: {
                files: {
                    'docs/src/html/shellBar.min.html': 'sources/structure/shellBar.html',
                    'docs/src/html/leftContainer.min.html': 'sources/structure/leftContainer.html',
                    'docs/src/html/leftSidebar.min.html': 'sources/structure/leftSidebar.html',
                    'docs/src/html/mainContainer.min.html': 'sources/structure/mainContainer.html',
                    'docs/src/html/rightContainer.min.html': 'sources/structure/rightContainer.html',
                    'docs/src/html/rightSidebar.min.html': 'sources/structure/rightSidebar.html'
                }
            }
        },
        htmllint: {
            all: ['docs/*.html', 'sources/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', '*.json', 'sources/**/*.js', 'sources/**/*.json'],
            options: {
                browser: true
            }
        },
        uglify: {
            buildScript: {
                src: ['sources/script/*.js'],
                dest: 'docs/src/js/script.min.js'
            }
        },
        minjson: {
            build: {
                files: {
                    'docs/src/json/leftSidebar.min.json': 'sources/content/leftSidebar.json',
                    'docs/src/json/leftContainer.min.json': 'sources/content/leftContainer.json',
                    'docs/src/json/Object.min.json': 'sources/content/Object.json',
                    'docs/src/json/simpleForm.min.json': 'sources/content/simpleForm.json',
                    'docs/src/json/rightContainer.min.json': 'sources/content/rightContainer.json',
                    'docs/src/json/rightSidebar.min.json': 'sources/content/rightSidebar.json'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'sources/style',
                    src: ['*.css'],
                    dest: 'docs/src/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-minjson');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [/*'htmllint',*/ 'htmlmin', 'cssmin', 'jshint', 'minjson', 'uglify', 'watch']);

};