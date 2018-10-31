let chainWebpack = require('./webpack.chain.js');

module.exports = {
  siteName: "Marcel Behrmann",
  siteUrl: "https://www.marcelbehrmann.de",
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1920,
        height: 1080,
        penthouse: {
          blockJSRequests: false,
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/*.md',
        typeName: 'Project',
      }
    },
  ],
  chainWebpack: chainWebpack,
}
