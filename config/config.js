const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'reigndesign'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reigndesign-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'reigndesign'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reigndesign-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'reigndesign'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reigndesign-production'
  }
};

module.exports = config[env];
