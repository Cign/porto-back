'use strict';

/**
 * ocrequest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ocrequest.ocrequest');
