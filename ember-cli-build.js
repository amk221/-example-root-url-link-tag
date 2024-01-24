'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      extensions: ['css', 'js', 'woff2'],

      // Toggle this to show xyz is used on the woff2 link tag in index.html
      // prepend: `xyz/`,
    },
  });

  return app.toTree();
};
