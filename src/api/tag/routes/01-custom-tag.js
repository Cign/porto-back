module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/tags/article/count', 
        handler: 'tag.findTagWithArticlesCount',
      },
    ]
  }