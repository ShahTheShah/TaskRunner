'use strict';

export default () => app.gulp.src(app.path.source.images)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.source.images)))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, app.plugins.imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 1
    })))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(app.plugins.browserSync.stream());