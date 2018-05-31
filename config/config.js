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
    db: 'mongodb://reigndesign:test2018@ds139970.mlab.com:39970/reigndesign',
    //db: 'mongodb://localhost/reigndesign-development',
    interval: 60
  },

  test: {
    root: rootPath,
    app: {
      name: 'reigndesign'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reigndesign-test',
    interval: 60
  },

  production: {
    root: rootPath,
    app: {
      name: 'reigndesign'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reigndesign-production',
    interval: 60
  }
};

module.exports = config[env];
