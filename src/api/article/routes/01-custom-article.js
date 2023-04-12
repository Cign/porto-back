module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/articles/filter/:tag', 
        handler: 'article.findArticlesByTag',
      },
      {
        method: 'GET',
        path: '/articles/:id/custom', 
        handler: 'article.findArticleWithAuthor',

      },
      {
        method: 'GET',
        path: '/articles/filter/:tag/details', 
        handler: 'article.filterArticlesByTag',

      },
      {
        method: 'GET',
        path: '/articles/:id/related', 
        handler: 'article.findArticleRelated',

      },
    ]
  }