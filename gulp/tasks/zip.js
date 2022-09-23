'use strict';

export default () => {
    app.plugins.deleteAsync(`${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.build}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'ZIP',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.plugins.zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest(`./`))
};