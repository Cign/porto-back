"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");
module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async findArticlesByTag(ctx) {
    const tagLabel = ctx.request.params.tag;
    strapi.log.debug(tagLabel);
    const [entries, count] = await strapi.db
      .query("api::article.article")
      .findWithCount({
        select: ["title"],
        where: {
          tag: {
            label: {
              $contains: tagLabel,
            },
          },
        },
        populate: {
          tag: {
            select: ["label"],
          },
          author: {
            select: ["username"],
          }
        },
        // select: ['title', 'description'],
        orderBy: { title: "DESC" },
        // populate: { category: true },
      });
    return { entries, count };
  },
  async findArticleWithAuthor(ctx) {
    const id = ctx.request.params.id;
    const response = await strapi.db
      .query("api::article.article")
      .findOne({
        where: {
          id,
        },
        populate: {
            tag: true,
            author: {
              select: ["username"],
            },
            avatar: true
          },
          orderBy: { title: "DESC" },
      });
    return response;
  },
  async filterArticlesByTag(ctx) {
    const tagLabel = ctx.request.params.tag;
    const res = await strapi.db
      .query("api::article.article")
      .findMany({
        where: {
          tag: {
            label: {
              $contains: tagLabel,
            },
          },
        },
        populate: {
          tag: {
            select: ["label"],
          },
          author: {
            select: ["username"],
          },
          avatar: {
            select: ["url"],
          }
        },
        orderBy: { title: "DESC" },
      });
    return res;
  },
  async findArticleRelated(ctx) {
    const id = ctx.request.params.id;
    const response = await strapi.db
      .query("api::article.article")
      .findOne({
        select: ["title"],
        where: {
          id,
        },
        populate: {
            RelatedArticles: {
              populate: {
                articles: {
                  select: ['title', 'urlTitle', 'date', ],
                  populate:{
                    avatar: {select: ['url']}
                  }
                }
              }
            }
          },
          orderBy: { title: "DESC" },
      });
    return !!response?.RelatedArticles ? response?.RelatedArticles?.articles : [];
  },
}));
