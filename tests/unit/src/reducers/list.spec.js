const reducer = require('src/reducers/list');
const schema = require('schema').places;

const all = [
  {
    site: 'Site A',
    suitability: ['AB', 'CD'],
    holding: ['AB'],
    area: '1st Floor',
    name: '1.24'
  },
  {
    site: 'Site B',
    suitability: ['CD'],
    holding: ['CD', 'EF'],
    area: '2nd Floor',
    name: '2.78'
  },
  {
    site: 'Site C',
    suitability: ['EF', 'GH'],
    holding: ['CD'],
    area: '1st Floor',
    name: '1.11',
    nacwo: {
      profile: {
        name: 'John Smith'
      }
    }
  }
];

describe('List Reducer', () => {

  let initial;

  beforeEach(() => {
    initial = { all, schema };
  });

  describe('initial state', () => {

    test('filters initial list', () => {
      expect(reducer({ ...initial, filter: 'Site B' }, {})).toMatchObject({ all, filtered: [ all[1] ] });
    });

  });

  describe('SET_TEXT_FILTER', () => {

    test('filters list', () => {
      const action = {
        type: 'SET_TEXT_FILTER',
        text: 'site b'
      };
      const output = reducer(initial, action);
      expect(output.all).toEqual(all);
      expect(output.filtered.length).toEqual(1);
      expect(output.filtered).toEqual([ all[1] ]);
    });

    test('filters list against array properties', () => {
      const action = {
        type: 'SET_TEXT_FILTER',
        text: 'gh' // match Site C suitability
      };
      const output = reducer(initial, action);
      expect(output.all).toEqual(all);
      expect(output.filtered.length).toEqual(1);
      expect(output.filtered).toEqual([ all[2] ]);
    });

    test('filters list against nested properties', () => {
      const action = {
        type: 'SET_TEXT_FILTER',
        text: 'John Smith'
      };
      const output = reducer(initial, action);
      expect(output.all).toEqual(all);
      expect(output.filtered.length).toEqual(1);
      expect(output.filtered).toEqual([ all[2] ]);
    });

  });

});
