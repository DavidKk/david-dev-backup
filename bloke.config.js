const path = require('path');

module.exports = {
  root   : path.join(__dirname, './'),
  src    : './posts',
  output : './blog',
  ignore : [/node_modules/],
  theme  : {
    use    : 'bloke-theme-sharp',
    config : {
    },
  },
  deploy: {
    email  : 'qowera@qq.com',
    apikey : 'd81735965fcb',
  },
};