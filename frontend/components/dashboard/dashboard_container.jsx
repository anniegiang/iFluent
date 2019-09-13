import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard/dashboard';

const mapStateToProps = state => ({
    userDetails: state.entities.teacherDetails[state.session.id]
});

export default connect(mapStateToProps)(Dashboard);