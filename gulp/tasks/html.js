'use strict';

export default () => app.gulp.src(app.path.source.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.plugins.pug({
        pretty: true,
        // verbose: true
    }))
    .pipe(app.plugins.replace(/@images\//g, './assets/images/'))
    .pipe(app.plugins.replace(/@styles\//g, './assets/styles/'))
    .pipe(app.plugins.replace(/@scripts\//g, './assets/scripts/'))
    .pipe(app.plugins.if(app.isBuild, app.plugins.versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_version',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {
            'file': './gulp/version.json'
        }
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());