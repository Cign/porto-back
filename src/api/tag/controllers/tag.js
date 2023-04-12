"use strict";

/**
 * tag controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tag.tag");
module.exports = createCoreController("api::tag.tag", ({ strapi }) => ({
  //Creating an entirely custom action
  async findTagWithArticlesCount(ctx) {
    var tagsCount = [];
    const listTags = await strapi.db.query("api::tag.tag").findMany({
      select: ["label"],
    });
    await Promise.all(listTags.map(async (tag) => {
        let label = tag.label;
        let n = await strapi.db.query('api::article.article').count({
        where: {
            tag: {
                label: {
                  $contains: label,
                },
              },
        },
      });
      tagsCount.push({label, count: n})
    }))
    return tagsCount;
  },
}));
