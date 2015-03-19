
var localized_keys = require('../../config/localized_keys');

module.exports.tests = {};

// test exports
module.exports.tests.interface = function(test, common) {
  test('interface: localized_keys', function(t) {
    t.true(Array.isArray(localized_keys), 'valid key list');
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('localized_keys: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};