
// Hold methods for fetching cfg values

const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {

       return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds159217.mlab.com:59217/nodetodomc';

    }


};
