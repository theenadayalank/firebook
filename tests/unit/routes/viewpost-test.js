import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | viewpost', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:viewpost');
    assert.ok(route);
  });
});
