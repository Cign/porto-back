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
    upload: {
      provider: 'local',
      providerOptions: {
        dynamicallyPrefixed: true|false,
        basePath: 'https://porto-back-production.up.railway.app'
      }
    }
  }