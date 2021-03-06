'use strict';

/**
 * @format
 * @flow
 */

import * as actions from './actions';
import * as types from '../types';
import {type Action} from '../../../reducers/tracks';

describe('add recent track synchronous action creators', () => {
  it('creates request action', () => {
    const expectedAction: Action = {type: types.ADD_RECENT_TRACK_REQUEST};
    expect(actions.request()).toStrictEqual(expectedAction);
  });

  it('creates success action', () => {
    const expectedAction: Action = {type: types.ADD_RECENT_TRACK_SUCCESS};
    expect(actions.success()).toStrictEqual(expectedAction);
  });

  it('creates failure action', () => {
    const error: Error = new Error('error');
    const expectedAction: Action = {
      type: types.ADD_RECENT_TRACK_FAILURE,
      error,
    };

    expect(actions.failure(error)).toStrictEqual(expectedAction);
  });
});