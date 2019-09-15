import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.currentUser.name}
            </div>
        )
    }
}

export default Dashboard;