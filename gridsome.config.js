module.exports = {
  siteName: "Marcel Behrmann",
  siteUrl: "https://www.marcelbehrmann.de",
  plugins: [
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
  ]
}
