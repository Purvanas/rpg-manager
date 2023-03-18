'use strict';

/**
 * stuff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stuff.stuff');
