import { createAction } from '@reduxjs/toolkit';
import reducer from '../app/appSlice';

describe('appSlice reducer', () => {
  it('should handle setSearchFields reducer', () => {
    const initialState = { searchFields: {} };
    const payload = { search: 'search input', sortBy: 'name', genre: 'drama' };

    const setSearchFields = createAction('app/setSearchFields');
    const action = setSearchFields(payload);

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ searchFields: payload });
  });
});
