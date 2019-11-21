import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Tweet from 'tweet';

class App extends React.Component {
    render() {
        let cards = tweets.map(tweet=>{
            return <Tweet tweet={tweet}/>
        })
        return (
            <div className="container">
                {cards}
            </div>
        );
    }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");