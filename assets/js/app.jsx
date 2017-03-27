var React = require('react');
var axios = require('axios');

const host = window.location.host.split(':')[0];
const ROOT_URL = (process.env.NODE_ENV == "production" ? 'https://' + host : 'http://' + host+':8000') + '/api/v1';



var Post = React.createClass({
    render: function () {
        return (
            <div className="post">
                <h1>{this.props.post.title}</h1>
                <div className="body">
                    {this.props.post.content}
                </div>
            </div>
        )
    }
});



module.exports = React.createClass({
    getInitialState : function () {
        return {posts:[]}
    },
    loadPosts: function(){
        axios.get(ROOT_URL + "/posts").then(function(response){
            this.setState({posts:response.data});
        });
    },
    componentDidMount: function () {
        this.loadPosts();
    },
    render: function(){
        var Posts = this.state.posts.map(function (post) {
            return <Post post={post} key={post.id}/>
        });
        return (
            <div>
                <header>
                    <h1>Djangae + React Blog</h1>
                </header>
                <div id="content">
                    {Posts}
                </div>
            </div>
        );
    }
});
