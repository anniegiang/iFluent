import React from 'react';
import TeacherInfoCard from './teacher_info_card';
import TeacherLessonsCard from './teacher_lessons_card';
import TeacherStatisticsCard from './teacher_statistics_card';
import TeacherReview from './teacher_review';

class TeacherMain extends React.Component {

    render() {
        return (
            <div className="Teacher-main">
                <TeacherInfoCard />
                <TeacherLessonsCard />
                <TeacherStatisticsCard />
                <TeacherReview />
            </div>
        )

    }
}

export default TeacherMain;