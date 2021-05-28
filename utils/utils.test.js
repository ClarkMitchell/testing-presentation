import { camelCase } from '~/utils';

describe('Utils', () => {
  it('camelCase should make strings camelCase.', () => {
    const map = {
      'foo': 'foo',
      'Bar': 'bar',
      'Foobar': 'foobar',
      'Foo Bar': 'fooBar',
      'foo bar': 'fooBar',
      'foo   bar': 'fooBar',
      'foo bar baz': 'fooBarBaz',
      'FOO BAR BAZ': 'fooBarBaz'
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(map)) {
      expect(value === camelCase(key));
    }
  });
});
