/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    "./src/fonts/Montserrat-Bold.svg": "fonts/",
    "./src/fonts/Montserrat-Bold.woff": "fonts/",
    "./src/fonts/Montserrat-Bold.ttf": "fonts/",
    "./src/fonts/Montserrat.ttf": "fonts/",
    "./src/fonts/Montserrat.svg": "fonts/",
    "./src/fonts/Montserrat.woff": "fonts/",
    "./src/fonts/Quicksand.svg": "fonts/",
    "./src/fonts/Quicksand.woff": "fonts/",
    "./src/fonts/Quicksand.ttf": "fonts/",
    //"./src/fonts/open-sans-regular.woff": "fonts/",
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
