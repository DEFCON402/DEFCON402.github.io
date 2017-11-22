var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack(),
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    })

    config.loader('svg', {
       test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: 'file-loader',
    })

    config.loader('isotope', {   
        test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter|classie|get\-style\-property|packery/,
        loader: 'imports?define=>false&this=>window'
    })

    // config.loader('sass', {
    //     test: /\.scss$/,
    //     loader: 'style-loader!css-loader!sass-loader',
    // })

    return config
};