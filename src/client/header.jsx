import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        let {user,time} = this.props;
        return (
            <p>
                <span className="h5">{user.name}</span>
                <span className="text-muted"> @{user.screen_name} · {time}</span>
            </p>
        );
    }
}

export default Header;