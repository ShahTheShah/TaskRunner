'use srtick';

export default () => app.gulp.src(app.path.source.fonts)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'STYLES',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.plugins.browserSync.stream());