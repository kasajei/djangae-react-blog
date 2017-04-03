/**
 * Created by kasajei on 2017/04/03.
 */

import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:8000/api/v1/') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  });

  const getPosts = () => api.get('/posts/');

  return {
    // a list of the API functions from step 2
    getPosts,
  }
};

// let's return back our create method as the default.
export default {
  create
}
