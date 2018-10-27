module.exports = {
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
        route: '/projects/:year/:month/:slug'
      }
    },
  ]
}
