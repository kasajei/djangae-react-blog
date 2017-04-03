/**
 * Created by kasajei on 2017/04/03.
 */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
  postsRequest: null,
  postsSuccess: ['posts'],
  postsFailure: null
});

export const PostsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  posts: [],
  fetching: null,
  error: null,
});

export const request = (state) =>
  state.merge({ fetching: true, posts: [] });

// successful temperature lookup
export const success = (state, action) => {
  const { posts } = action;
  return state.merge({ fetching: false, error: null, posts });
};

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, posts: [] });


export const reducer = createReducer(INITIAL_STATE, {
  [Types.POSTS_REQUEST]: request,
  [Types.POSTS_SUCCESS]: success,
  [Types.POSTS_FAILURE]: failure
});
