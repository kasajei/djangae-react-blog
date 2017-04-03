/**
 * Created by kasajei on 2017/04/03.
 */
import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import { PostsTypes } from '../Redux/PostsRedux'
import { getPosts } from './PostsSagas'

const api = API.create();

export default function * root () {
  yield [
    takeLatest(PostsTypes.POSTS_REQUEST, getPosts, api)
  ]
}
