module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files:[{
                    expand:true,
                    cwd:"sass/", 
                    src:["**/**.scss"],
                    dest:"../task_bar/static/",
                    ext:".css"
                }]
                // files: {
                //     '../task_bar/static/main.css': 'sass/main.scss',
                //     '../task_bar/static/position.css':'sass/position.scss'
                // }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}