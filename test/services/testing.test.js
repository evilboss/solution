const assert = require('assert');
const app = require('../../src/app');

describe('\'testing\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/testing');

    assert.ok(service, 'Registered the service');
  });
});
