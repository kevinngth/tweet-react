import React from 'react';
import ReactDOM from 'react-dom';

class Dp extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="col-2">
                <img className="img-fluid" src={this.props.user.profile_image_url}/>
            </div>
        );
    }
}

export default Dp;