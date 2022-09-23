'use strict';

import * as nodePath from 'path';

const
    rootFolder   = nodePath.basename(nodePath.resolve()),
    buildFolder  = './dist',
    sourceFolder = './source';

export default {
    build: {
        html:    `${buildFolder}/`,
        styles:  `${buildFolder}/assets/styles/`,
        scripts: `${buildFolder}/assets/scripts/`,
        images:  `${buildFolder}/assets/images/`,
        fonts:   `${buildFolder}/assets/fonts/`,
    },
    source: {
        html:    `${sourceFolder}/*.pug`,
        styles:  `${sourceFolder}/assets/styles/*.scss`,
        scripts: `${sourceFolder}/assets/scripts/index.js`,
        images:  `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        fonts:   `${sourceFolder}/assets/fonts/**/*.{ttf,woff,woff2}`,
    },
    watch: {
        html:    `${sourceFolder}/**/*.pug`,
        styles:  `${sourceFolder}/assets/styles/**/*.scss`,
        scripts: `${sourceFolder}/assets/scripts/**/*.js`,
        images:  `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        fonts:   `${sourceFolder}/assets/fonts/**/*.{ttf,woff,woff2}`,
    },
    clean: buildFolder,
    buildFolder, sourceFolder,
    rootFolder, ftp: 'portfolio'
};