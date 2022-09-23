'use strict';

import config from '../config/ftp.js';

export default () => {
    config.log = app.plugins.util.log;
    const ftpConnect = app.plugins.vinylFTP.create(config);
    return app.gulp.src(`${app.path.build}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}}`));
};