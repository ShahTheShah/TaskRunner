'use strict';

export default () => app.gulp.src(app.path.source.styles, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'STYLES',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.plugins.sass({
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.if(app.isBuild, app.plugins.groupCssMedisQueries()))
    .pipe(app.plugins.autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions']
    }))
    .pipe(app.plugins.replace(/@images\//g, '../images/'))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.if(app.isBuild, app.plugins.cleanCss()))
    .pipe(app.plugins.rename({
        suffix: '.min',
        end: '.css'
    }))
    .pipe(app.gulp.dest(app.path.build.styles), { sourcemaps: app.isDev })
    .pipe(app.plugins.browserSync.stream());