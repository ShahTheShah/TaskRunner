'use strict';

export default () => app.gulp.src(app.path.source.scripts, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'SCRIPTS',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.plugins.webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
            filename: 'index.min.js'
        }
    }))
    .pipe(app.gulp.dest(app.path.build.scripts, { sourcemaps: app.isDev }))
    .pipe(app.plugins.browserSync.stream());