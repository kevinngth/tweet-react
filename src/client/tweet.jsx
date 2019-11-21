import React from 'react';
import ReactDOM from 'react-dom';
import Dp from 'dp';
import Header from 'header';
import Body from 'body';
import Footer from 'footer';

class Tweet extends React.Component {
  render() {
    let {created_at,text,truncated,entities,extended_entities,source,user,retweet_count,favorite_count,favorited,retweeted} = this.props.tweet;
    return (
        <div className="card">
            <div className="row">
                <Dp user={user}/>
                <div class="col">
                    <Header time={created_at} user={user}/>
                    <Body text={text} entities={entities}/>
                    <Footer data={retweet_count,favorite_count,favorited,retweeted}/>
                </div>
            </div>
        </div>
    );
  }
}

export default Tweet;