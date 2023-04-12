module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/comments/article/:id', 
        handler: 'comment.findCommentsByArticle',
      },
    ]
  }