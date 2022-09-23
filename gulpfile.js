'use strict';

// Основной модуль
import gulp    from 'gulp';
import plugins from './gulp/config/plugins.js';

// Импорт путей
import path    from './gulp/config/path.js';
import HTML    from './gulp/tasks/html.js';
import Styles  from './gulp/tasks/styles.js';
import Scripts from './gulp/tasks/scripts.js';
import Images  from './gulp/tasks/images.js';
import Fonts  from './gulp/tasks/fonts.js';
import ZIP     from './gulp/tasks/zip.js';
import FTP     from './gulp/tasks/ftp.js';
import Reset   from './gulp/tasks/reset.js';
import Server  from './gulp/tasks/server.js';

// Передача значений в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path, gulp, plugins
};

const
    // Наблюдатель за изменениями в файлах
    watcher = () => {
        gulp.watch(path.watch.html, HTML);
        gulp.watch(path.watch.styles, Styles);
        gulp.watch(path.watch.scripts, Scripts);
        gulp.watch(path.watch.images, Images);
    },

    // Построение сценариев выполнения задач
    mainTask = gulp.parallel(HTML, Styles, Scripts, Images, Fonts),
    dev = gulp.series(Reset, mainTask, gulp.parallel(watcher, Server)),

    build = gulp.series(Reset, mainTask),
    AssemblingZIP = gulp.series(Reset, mainTask, ZIP),
    deployFTP = gulp.series(Reset, mainTask, FTP);

export { dev, build, AssemblingZIP, deployFTP };

// Выполнение сценариев
gulp.task('default', dev); 