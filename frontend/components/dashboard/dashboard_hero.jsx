import React from 'react';

class DashboardHero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, profilePicture } = this.props.currentUser
        return (
            <div className="dashboard-hero" style={{marginBottom: "40px"}}>
                <div className="dashboard-user">
                    <section className="dashboard-info">
                        <div className="avatar">
                            <div className="avatar avatar-medium avatar-placeholder">
                                <img src={profilePicture} alt="avatar"/>
                            </div>
                        </div>
                        <section className="dashboard-person">
                            <div className="dashboard-name dashboard-name-common">
                                {this.props.currentUser.name}
                            </div>
                            <div className="dashboard-id">
                                <span>User ID: </span>
                                <span>{this.props.currentUser.id}</span>
                            </div>
                        </section>
                    </section>

                    <div className="dashboard-lesson">
                        <section className="lesson-info">
                            <div>0</div>
                            <div>
                                <span className="upcoming-lessons">Upcoming Lessons</span>
                            </div>
                        </section>
                        <section className="lesson-info">
                            <div>0</div>
                            <div>
                                <span className="action-required">Action Required</span>
                            </div>
                        </section>
                        <section className="lesson-info">
                            <div>0</div>
                            <div>
                                <span className="active-packages">Active Packages</span>
                            </div>
                        </section>
                    </div>
                    <div className="dashboard-total-balance">
                        <header>
                            <span>Total Balance</span>
                        </header>
                        <section className="dashboard-total-money">$0 USD</section>
                        <a className="dashboard-total-Credits" href="/payment">
                            <section><span>Add Credits</span></section>
                        </a>
                    </div>

                </div>
                <div className="recommend-teacher-slider-container">
                    <a href="#/teachers/English" type="button" className="find-your-teacher-btn">
                        <span>FIND YOUR TEACHER</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default DashboardHero;