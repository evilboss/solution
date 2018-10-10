// Initializes the `testing` service on path `/api/testing`. (Can be re-generated.)
const createService = require('feathers-nedb');
const createModel = require('../../models/testing.model');
const hooks = require('./testing.hooks');
const hooks2 = require('./testing.test.hooks');

// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {
  let Model = createModel(app);
  let paginate = app.get('paginate');
  // !code: func_init // !end

  let options = {
    Model
    //code: options_more // !end
  };
  //code: options_change // !end

  // Initialize our service with any options it requires
  app.use('/api/testing/test', createService(options));

  app.use('/api/testing', createService(options));

  // Get our initialized service so that we can register hooks
  const service2 = app.service('api/testing/test');

  const service = app.service('api/testing');

  service2.hooks(hooks2);
  service.hooks(hooks);


  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
