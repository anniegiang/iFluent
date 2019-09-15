import React from 'react';
import DashboardHero from './dashboard_hero';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="italki-logged-in">
                <div className="flex-container-logged-in">
                    <div style={{position: "static", zIndex: "inherit"}}>
                        <div className="dashboard">
                            <DashboardHero currentUser={this.props.currentUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;