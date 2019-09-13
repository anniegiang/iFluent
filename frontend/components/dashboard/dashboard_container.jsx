import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchTeacherDetails } from '../../actions/teacher_detail_actions'

const mapStateToProps = state => {
    // debugger
    return {
        currentUserId: state.session.id,
        userDetails: state.entities.users[state.session.id],
        teacherDetails: {} || state.entities.teacherDetails[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchTeacherDetails: id => dispatch(fetchTeacherDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);