import React from 'react';
import ReactDOM from 'react-dom';

class Body extends React.Component {
    render() {
        let {text,entities} = this.props
        let img = entities.media ? <img className="img-fluid" src={entities.media.media_url+""}/> : "" ;
        return (
            <div>
                <p>{text}</p>
                {img}
            </div>
        );
    }
}

export default Body;