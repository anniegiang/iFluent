import React from 'react';

class TeacherInfoCard extends React.Component {

    render() {
        const { country, about_me, title, videoUrl, hourlyRate, trialRate, workExperience, education, certificates, name, profilePicture } = this.props.teacher;
        return (
            <div className="TeacherInfoCard teacherCard-box1 TeacherInfoCard-desktop">
                <div className="Video">
                    <iframe 
                        src="https://www.youtube.com/embed/b19yQ1noWBM?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
                        frameBorder="0"
                        width="100%"
                        height="422"
                        title="video"
                        allowFullScreen=""
                    >
                    </iframe>
                </div>

                <div className="teacherCard">
                    <div className="teacherCard-left">
                        <div className="avatar avatar-big avatar-shadow avatar-placeholder">
                            <img src={profilePicture} alt="Avatar"/>
                        </div>
                        <div className="Online">
                            <span>Online</span>
                        </div>
                    </div>
                    <div className="teacherCard-body">
                        <div className="teacherCard-part1">
                            <div className="teacherCard-middle">
                                <div className="teacherCard-name">
                                    {name}
                                    {/* <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/am.a5752aba.svg" alt="AM" width="30px" height="16px" className="flag-icon"/> */}
                                </div>
                                <div className="teacherCard-personalInfo">
                                    <div><span>{this.props.teacher.title}</span></div>
                                    <div><span>From </span><span>{country}</span></div>
                                    <div><span>Living in </span><span>{country}</span></div>
                                </div>
                                <div className="redbar"></div>
                            </div>
                            <div className="teacherCard-right">
                                <div className="teacherCard-right-icon">
                                    <span className="Favourite">
                                        <img width="24" height="24" src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/favourite.63cfc0be.svg" alt="fav"/>
                                    </span>
                                    <div className="share-teacher-wrapper">
                                        <div class="TagMenu TagMenu-desktop TagMenu-rerotate90">
                                            <div class="chat-send-attachment-btn">
                                                <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/shareBtn.5fa47672.svg" alt="shares" width="24" height="24"/>
                                            </div>
                                        <div class="TagMenu-menu TagMenu-menu-bottom-right TagMenu-hidden">
                                            <div class="TagMenu-menu-option" data-value="1">
                                                Share this teacher
                                            </div>
                                            <div class="TagMenu-menu-option" data-value="2">
                                                Report this teacher
                                            </div>
                                            <div class="TagMenu-menu-option" data-value="3">
                                                Block this teacher
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="teacherCard-right-body">
                                    <div className="teacherCard-stars">
                                        <div class="stars-box">
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <span class="number">5.0</span>
                                        </div>
                                    </div>
                                    <div><span>956 LESSONS</span></div>
                                    <div><span>103 STUDENTS</span></div>

                                </div>
                            </div>
                        </div>
                        <div className="teacherCard-part2">
                            <div className="teacherCard-teaches">
                                <div className="teacherCard-teaches-title">
                                    <span>Teaches</span>
                                </div>
                                <div className="teacherCard-teaches-languages">
                                    <div>
                                        <span className="language">
                                            <span>Placeholder</span>
                                        </span>
                                        <span className="tooltip-container-box" gap="5">
                                            <span className="tooltip-container" placement="bottom">
                                                <span className="tooltip-reference">
                                                    <div>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                    </div>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="teacherCard-teaches">
                                <div className="teacherCard-teaches-title">
                                    <span>Also Speaks</span>
                                </div>
                                <div className="teacherCard-teaches-languages">
                                    <div>
                                        <span className="language">
                                            <span>Placeholder</span>
                                        </span>
                                        <span className="tooltip-container-box" gap="5">
                                            <span className="tooltip-container" placement="bottom">
                                                <span className="tooltip-reference">
                                                    <div>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                        <span className="level level-color-2 level-color-3"></span>
                                                    </div>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="teacherCard-switch-profile-btn btn btn-standard btn-ghost-default">
                            <span>Switch to User Profile</span>
                        </button>
                    </div>
                </div>
                    <div className="aboutMe">
                        <div>
                            <h2 class="cardTitle"><span>About Me</span></h2>
                            <div className="aboutMe-introduction">
                                <div class="TextOverflow" style={{maxHeight: "63px", lineHeight: "21px"}}>Don't stop just yet! 
                                    Every one of us reaches that point in language learning when progress is slow, new methods are few, and you end up losing motivation. THAT'S WHERE I COME.
                                    I'm here in order to help you through out these situations as I've been there and going through it again with French and Spanish.
                                    In my lessons, you should expect FUN methods like Reading STORIES and books ( you can have the freedom of choice of books) Multiple entertaining exercises from riddles to games, to all the fun stuff.
                                    We'll go together through basic conversations and take it step by step to higher levels.
                                    One thing should always be on your mind; LANGUAGES ARE MEANT TO BE SPOKEN, so stop just memorizing all these grammatical rules and first LET'S TALK! 
                                    I'll let you know a secret; the best way to learn a language is to forget you're learning and just have fun. Just like the difference in pressure between you dedicating an hour a day for a workout or just adding some activities to your day like cycling to your destinations.
                                    So let all your stress go away and just enjoy the journey of learning a language in a totally different way.
                                    <span class="TextOverflow-readMore">
                                        <span class="TextOverflow-readMore-ellipsis">&nbsp;...</span>
                                        <span class="TextOverflow-readMore-text">
                                            <span>Read more</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        )

    }
}

export default TeacherInfoCard;
