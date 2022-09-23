'use strict';

import replace         from 'gulp-replace';
import plumber         from 'gulp-plumber';
import notify          from 'gulp-notify';
import browserSync     from 'browser-sync';
import ifPlugin        from 'gulp-if';
import { deleteAsync } from 'del';

// FTP
import zipPlugin from 'gulp-zip';
import vinylFTP from 'vinyl-ftp';
import util     from 'util';

// HTML
import versionNumber from 'gulp-version-number';
import pug           from 'gulp-pug';

// Styles
import dartSass             from 'sass';
import gulpSass             from 'gulp-sass';
import rename               from 'gulp-rename';
import cleanCss             from 'gulp-clean-css';
import autoprefixer         from 'gulp-autoprefixer';
import groupCssMedisQueries from 'gulp-group-css-media-queries';
const sass = gulpSass(dartSass);

// Scripts
import webpack  from 'webpack-stream';

// Images
import imagemin from 'gulp-imagemin';
import newer    from 'gulp-newer';


export default {
    replace, plumber,
    notify, browserSync,
    newer, if: ifPlugin,
    vinylFTP, util,
    versionNumber, rename,
    groupCssMedisQueries,
    sass, autoprefixer,
    cleanCss, webpack, 
    deleteAsync, pug,
    imagemin, zipPlugin
};