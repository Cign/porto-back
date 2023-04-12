module.exports = {
    meilisearch: {
      config: {
        article: {
          transformEntry({ entry }) { // can also be async
            return {
              ...entry,
              author: entry.author.username
            }
          },
        }
      }
    },
  }