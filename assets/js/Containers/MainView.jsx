import React from 'react';
import { Link } from 'react-router';



export default class MainView extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <h1>Djangae + React Blog@{process.env.NODE_ENV}サーバー</h1>
                    <Link to="/post">記事表示する</Link>
                </header>
                <div id="content">
                </div>
            </div>
        );
    }
}