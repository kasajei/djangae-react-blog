import React from 'react';
import axios from 'axios';

const host = window.location.host.split(':')[0];
const ROOT_URL = (process.env.NODE_ENV == "production" ? 'https://' + host : 'http://' + host+':8000') + '/api/v1';


class Post extends React.Component{
    render(){
        return (
            <div className="post">
                <h1>{this.props.post.title}</h1>
                <div className="body">
                    {this.props.post.content}
                </div>
            </div>
        );
    }
}



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }
    loadPosts(){
        var self = this;
        axios.get(ROOT_URL + "/posts").then(function(response){
            self.setState({posts:response.data});
        });
    }
    componentDidMount() {
        this.loadPosts();
    }
    render(){
        const Posts = this.state.posts.map(function (post) {
            return <Post post={post} key={post.id}/>
        });
        return (
            <div>
                <header>
                    <h1>Djangae + React Blog@{process.env.NODE_ENV}サーバー</h1>
                </header>
                <div id="content">
                    {Posts}
                </div>
            </div>
        );
    }
}