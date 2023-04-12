'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment');
module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async findCommentsByArticle(ctx) {
      const id = ctx.request.params.id;
      const [entries, count] = await strapi.db
        .query("api::comment.comment")
        .findWithCount({
          where: {
            article: {
              id: {
                $eq: id,
              },
            },
          },
          populate: {
            author: {
              select: ["username"],
            },
          },
        });
      return { entries, count };
    },
  }));