// Hooks for service `testing`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
// !code: imports // !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const {iff} = commonHooks;
// eslint-disable-next-line no-unused-vars
const {create, update, patch, validateCreate, validateUpdate, validatePatch} = require('./testing.validate');
// !end

// !code: init // !end

let moduleExports = {
    before: {
      // !<DEFAULT> code: before
      all: [],
      find: [
        hook => {
          console.log('find', hook.service);
          console.log(hook.service.id, hook.params.query);
          hook.service.id = 'someotherField'
        },
        hook => {
          console.log(hook.service.id);

        }
      ],
      get: [

      ],
      create:
        [
          hook => {
            console.log('create')
          }],
      update:
        [],
      patch:
        [],
      remove:
        []
// !end
    },

    after: {
      // !<DEFAULT> code: after
      all: [],
      find:
        [],
      get:
        [],
      create:
        [],
      update:
        [],
      patch:
        [],
      remove:
        []
      // !end
    }
    ,

    error: {
      // !<DEFAULT> code: error
      all: [],
      find:
        [],
      get:
        [
          /*(hook) => {
          console.log(hook.service
            , hook.error.className);
          return Promise.reject(hook.error).resolve({data: "data"});
        }*/],
      create:
        [],
      update:
        [],
      patch:
        [],
      remove:
        []
      // !end
    }
    ,
// !code: moduleExports // !end
  }
;

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
