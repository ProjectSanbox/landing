const withPlugins = require('next-compose-plugins'); 
const withCSS = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images'); 
const withFonts = require('next-fonts');


module.exports = withPlugins(
    [
        [//optimizedImages
            optimizedImages,
            {
                handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
                optimizeImages: true,
                mozjpeg: {
                    quality: 80,
                },
                optipng: {
                    optimizationLevel: 3,
                },
                webp: {
                    preset: 'default',
                    quality: 75,
                },
                svgo: {
                    plugins: [
                        { removeComments: false }
                    ]
                },
            }
        ],
        withCSS,
        {
            devIndicators: {
            autoPrerender: false,
            }   
        }
    ],//e

     
)