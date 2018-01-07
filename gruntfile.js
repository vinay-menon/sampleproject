module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev','watch']
            },
            options: {
                livereload: true,
            },
        },
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: {
                files: [{
                    expand: 'compressed',
                    check: false,
                    update: false,
                    cwd: './sass/',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};