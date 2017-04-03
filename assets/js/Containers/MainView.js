import React from 'react';
import { Link } from 'react-router';
import PostsActions from '../Redux/PostsRedux'
import { connect } from 'react-redux'

class Post extends React.Component{
    render(){
        return (
            <div className="post">
                <h1><Link to="/post">{this.props.post.title}</Link></h1>
                <div className="body">
                    {this.props.post.content}
                </div>
            </div>
        );
    }
}


class MainView extends React.Component{
  componentDidMount() {
    this.props.requestPosts();
  }
  renderPosts(){
    return (
      this.props.posts.map(function (post) {
        return <Post post={post} key={post.id}/>
      })
    )
  }
  render(){
    return (
      <div>
        <header>
          <h1>Djangae + React Blog@{process.env.NODE_ENV}サーバー</h1>
        </header>
        <div id="content">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posting.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPosts: () => dispatch(PostsActions.postsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView)