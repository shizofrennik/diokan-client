import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AnnouncementExample1 from '../../../../styles/images/announcement-example-1.png';
import AnnouncementExample2 from '../../../../styles/images/announcement-example-2.png';
import AnnouncementExample3 from '../../../../styles/images/announcement-example-3.png';
import AnnouncementExample4 from '../../../../styles/images/announcement-example-4.png';
import AnnouncementExample5 from '../../../../styles/images/announcement-example-5.png';

import AnnouncementExample1x2 from '../../../../styles/images/announcement-example-1@2x.png';
import AnnouncementExample2x2 from '../../../../styles/images/announcement-example-2@2x.png';
import AnnouncementExample3x2 from '../../../../styles/images/announcement-example-3@2x.png';
import AnnouncementExample4x2 from '../../../../styles/images/announcement-example-4@2x.png';
import AnnouncementExample5x2 from '../../../../styles/images/announcement-example-5@2x.png';

import AnnouncementExample1x3 from '../../../../styles/images/announcement-example-1@3x.png';
import AnnouncementExample2x3 from '../../../../styles/images/announcement-example-2@3x.png';
import AnnouncementExample3x3 from '../../../../styles/images/announcement-example-3@3x.png';
import AnnouncementExample4x3 from '../../../../styles/images/announcement-example-4@3x.png';
import AnnouncementExample5x3 from '../../../../styles/images/announcement-example-5@3x.png';

class Announcements extends React.Component {
    render() {
        return (
             <div className="diokan-announcements">
                <div className="diokan-announcements__header">
                    <div className="diokan-title-secondary ">
                        Announcements
                    </div>  
                </div>
                <div className="diokan-announcements-inner">
                    <div className="diokan-announcements__item">
                        <div className="diokan-announcements__item-image">
                            <img className="img-responsive" 
                            src={AnnouncementExample1}
                            srcSet={ AnnouncementExample1x2 + ' 2x'} alt="Diokan"/>
                        </div>
                        <div className="diokan-announcements__item-group">
                            <div className="diokan-announcements__item-description">
                                Diokan T-shirt
                                give-away!
                            </div>
                            <div className="diokan-announcements__item-link">
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div className="diokan-announcements__item">
                        <div className="diokan-announcements__item-image">
                            <img className="img-responsive" 
                              src={AnnouncementExample2}
                            srcSet={AnnouncementExample2x2 + ' 2x'}  alt="Diokan"/>
                        </div>
                        <div className="diokan-announcements__item-group">
                            <div className="diokan-announcements__item-description">
                                Introducing our new pricing plans
                            </div>
                            <div className="diokan-announcements__item-link">
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div className="diokan-announcements__item">
                        <div className="diokan-announcements__item-image">
                            <img className="img-responsive" 
                              src={AnnouncementExample3}
                             srcSet={AnnouncementExample3x2 + ' 2x'}  alt="Diokan"/>
                        </div>
                        <div className="diokan-announcements__item-group">
                            <div className="diokan-announcements__item-description">
                                Frederick D. Ford
                                Photographer
                            </div>
                            <div className="diokan-announcements__item-link">
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div className="diokan-announcements__item">
                        <div className="diokan-announcements__item-image">
                            <img className="img-responsive" 
                              src={AnnouncementExample4}
                            srcSet={ AnnouncementExample4x2 + ' 2x'}  alt="Diokan"/>
                        </div>
                        <div className="diokan-announcements__item-group">
                            <div className="diokan-announcements__item-description">
                                New features added
                                to our app
                            </div>
                            <div className="diokan-announcements__item-link">
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div className="diokan-announcements__item">
                        <div className="diokan-announcements__item-image">
                            <img className="img-responsive" 
                              src={AnnouncementExample5}
                            srcSet={AnnouncementExample5x2 + ' 2x'}  alt="Diokan"/>
                        </div>
                        <div className="diokan-announcements__item-group">
                            <div className="diokan-announcements__item-description">
                                New color
                                correction tutorial
                            </div>
                            <div className="diokan-announcements__item-link">
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Announcements 