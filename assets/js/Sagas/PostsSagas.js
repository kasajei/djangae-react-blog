/**
 * Created by kasajei on 2017/04/03.
 */
import { call, put } from 'redux-saga/effects'
import PostsActions from '../Redux/PostsRedux'

export function * getPosts (api, action) {
  const response = yield call(api.getPosts);

  if (response.ok) {
    const posts = response.data;
    yield put(PostsActions.postsSuccess(posts));
  } else {
    yield put(PostsActions.postsFailure());
  }
}
