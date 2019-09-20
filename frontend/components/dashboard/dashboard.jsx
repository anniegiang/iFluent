import React from 'react';
import DashboardHero from './dashboard_hero';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex-container">
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="dashboard">
                        <DashboardHero lessons={this.props.lessons} currentUser={this.props.currentUser}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;