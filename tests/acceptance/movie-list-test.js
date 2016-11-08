import { test } from 'qunit';
import moduleForAcceptance from 'film-liste/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movie list');

test('should redirect to login route', function (assert) {
  visit('/');
  click('a:contains("Login")');
  andThen(function () {
    assert.equal(currentURL(), '/login', 'should navigate to login');
  });
});
test('should redirect to register route', function (assert) {
  visit('/');
  click('a:contains("Register")');
  andThen(function () {
    assert.equal(currentURL(), '/register', 'should navigate to register');
  });
});

