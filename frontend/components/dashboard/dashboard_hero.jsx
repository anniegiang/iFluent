import React from 'react';

class DashboardHero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, profilePicture } = this.props.currentUser
        return (
            <div className="dashboard-user">
                <section className="dashboard-info">
                    <div className="avatar">
                        <img src={profilePicture} alt=""/>
                    </div>
                </section>
                <section className="dashboard-person">
                    <div className="dashboard-name dashboard-name-common">
                        {this.props.currentUser.name}
                    </div>
                </section>
            </div>
        )
    }
}

export default DashboardHero;