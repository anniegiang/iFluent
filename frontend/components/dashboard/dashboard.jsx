import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTeacherDetails(this.props.currentUserId);
    }

    render() {
        return (
            <div>
                {this.props.userDetails.name}
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;