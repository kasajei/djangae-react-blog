var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <h1>Hello, world@{process.env.NODE_ENV}サーバー</h1>
    }
});
