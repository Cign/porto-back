"use strict";

/**
 * ocrequest controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const Tesseract = require("tesseract.js");

module.exports = createCoreController("api::ocrequest.ocrequest");
module.exports = createCoreController(
  "api::ocrequest.ocrequest",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async OCRImage(ctx) {
      //   try {
      // Authenticate the request
      //strapi.api.user.services.jwt.verify(ctx)
      console.log("horhorho", ctx.request.body);
      const { image, lang } = ctx.request.body;
      const { data } = await Tesseract.recognize(image, "fra", {
        tessedit_char_whitelist:
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
      console.log("eresult", data.text);
      return { text: data.text };
    },
  })
);
