import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() {
        let {retweet_count,favorite_count,favorited,retweeted} = this.props.data
        return (
            <p>Retweets: <span>{retweet_count}</span> , Favorited: <span>{favorite_count}</span></p>
        );
    }
}

export default Footer;