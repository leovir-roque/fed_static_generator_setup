module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: ["build/"]
        },
        copy: {
            fontIcons: {
                expand: true,
                cwd: 'app/assets/less/utilities/icons/',
                src: '**',
                dest: 'build/assets/css/utilities/icons/',
            },
            images: {
                expand: true,
                cwd: 'app/assets/images',
                src: '**',
                dest: 'build/assets/images'
            },
            js: {
                expand: true,
                cwd: 'app/assets/js/',
                src: '**',
                dest: 'build/assets/js/',
            },
        },
        less: {
            development: {
                options: {
                    paths: ["app/assets/less"],
                },
                files: {
                    "build/assets/css/styles.css": "app/assets/less/styles.less",
                }
            }
        },
        assemble: {
            options: {
                layout: ['app/templates/layouts/default.hbs'],
                partials: ['app/templates/partials/**/**/*.hbs'],
                data: ['app/templates/data/*.{json,yml}'],
                flatten: true
            },
            pages: {
                options: {
                    layout: 'app/templates/layouts/default.hbs'
                },
                files: {
                    'build/': ['app/templates/pages/*.hbs']
                }
            },
        },
        prettify: {
            options: {
                "indent": 4
            },
            all: {
                expand: true,
                cwd: './build',
                ext: '.html',
                src: ['*.html'],
                dest: './build'
            }
        },
        watch: {
            less: {
                files: ["app/assets/less/**/**/*.less"],
                tasks: ["less"]
            },
            js: {
                files: ["app/assets/js/**/*.js"],
                tasks: ["copy"]
            },
            images: {
                files: ["app/assets/images/**/*.{png,jpg}"],
                tasks: ["copy"]
            },
            templates: {
                files: ["app/templates/**/*.{hbs,json}"],
                tasks: ["assemble", "prettify"]
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "build/**/*.{css,js,html,png,jpg}"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./build"
                    }
                }
            }
        },
    });

    /**
     * Tasks
     */
    grunt.registerTask('serve', [
        'clean',
        'copy',
        'less',
        'assemble',
        'prettify',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy',
        'less',
        'assemble',
        'prettify'
    ]);
};
