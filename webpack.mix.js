let mix = require('laravel-mix');

let themePath = '';

mix
.options({
  processCssUrls: false,
})
.sass( themePath + 'sass/main.scss',  themePath + 'css', { sassOptions: { outputStyle: 'compressed' }})
.combine([ themePath + 'js/app.js'  ], themePath + 'js/app.min.js'  )
.disableNotifications();
