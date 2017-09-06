import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import {getSession, removeSelectedSession} from 'store/sessions';
import moment from 'moment';
import Spinner from 'components/Spinner';
import GalleryItem from 'components/GalleryItem';
import Lightbox from 'react-images';

class PreviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
  }
  
  componentWillMount() {
    this.props.getSession(this.props.params.sessionId);
  }

  componentWillUnmount() {
    this.props.removeSelectedSession();
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.session.session_photos.length - 1) return;

    this.gotoNext();
  }

  getImages(files) {
    return files.map((file, index) => {
      return (
        <GalleryItem
          deleteFile={this.deleteFile}
          clickHandler={(e) => this.openLightbox(index, e)}
          file={file}
          key={file.id} />
      )});
  }

  getContacts() {
    let {currentUser} = this.props;
    return (<Col md={4}>
      <div className="diokan-card-info">
        <div className="diokan-card-info-group">
          <div className="diokan-card-info-email">
            <span
              className="diokan-card-info-icon diokan-card-info-icon__message">
                <i className="fa fa-user" aria-hidden="true" />
            </span>
            {currentUser.name}
          </div>
        </div>
        <div className="diokan-card-info-group">
          <div className="diokan-card-info-email">
            <span
              className="diokan-card-info-icon diokan-card-info-icon__message">
                <i className="fa fa-envelope" aria-hidden="true" />
            </span>
            {currentUser.email}
          </div>
        </div>
        <div className="diokan-card-info-group">
          <div className="diokan-card-info-phone">
            <span
              className="diokan-card-info-icon diokan-card-info-icon__phone">
                <i className="fa fa-phone" aria-hidden="true" />
            </span>
            {currentUser.phone}
          </div>
        </div>
      </div>
    </Col>)
  }

  render() {
    let {session, currentUser} = this.props;
    let {lightboxIsOpen, currentImage} = this.state;
    return (
      <div>
        <div className="diokan-header">
          <div className="diokan-header-inner">
            <div className="diokan-header__logo">
              <div className="diokan-header__logo-text">
                Sessions
              </div>
            </div>
            <div className="diokan-header__action-group">
              <div className="diokan-header__action-group-inner">
                <div className="diokan-balance-box">
                  <div className="diokan-balance-box__title">
                    Balance
                  </div>
                  <div className="diokan-balance-box__count">
                    $641.77
                  </div>
                </div>
              </div>
              <button
                className="diokan-btn diokan-btn-secondary diokan-btn-secondary_role-upload diokan-helper__coming-soon">
                <span className="diokan-icon diokan-icon__upload" />
                Upload
              </button>
            </div>
          </div>
        </div>
        {!session.id ?
          (<div className="diokan-spinner diokan-spinner_table" style={{fontSize: "30px"}}><Spinner /></div>) :
          (<div className="diokan-main-inner diokan-main-inner__sessions">
            <div className="diokan-sessions">
              <div className="diokan-sessions-intro">
                <div className="diokan-sessions-intro-group">
                  <Link to="/sessions" className="diokan-link diokan-link__small">
                <span className="diokan-icon-arrow-back">
                    <i className="fa fa-chevron-left" aria-hidden="true" />
                </span>
                    Back to all sessions
                  </Link>
                </div>
              </div>
              <div className="diokan-sessions__content">
                <div className="diokan-sessions-info">
                  <Row>
                    <Col md={8}>
                      <div className="diokan-card-info">
                        <div className="diokan-card-info-group">
                          <div className="diokan-card-info-name">
                            {currentUser.name}
                          </div>
                          <div className="diokan-card-info-id">
                            {`#${session.photo_start}-${session.photo_end}`}
                          </div>
                        </div>
                        <div className="diokan-card-info-group">
                          <div className="diokan-card-info-date">
                            {moment(session.date).format('DD-MMM-YYYY')}
                          </div>
                          {session.location &&
                          <div className="diokan-card-info-location">
                            <span
                              className="diokan-card-info-icon diokan-card-info-icon__location">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                            </span>
                            {session.location}
                          </div>}
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="diokan-sessions-state">
                        <div className="diokan-state-box">
                          <div className="diokan-state-box-header">
                            Status
                          </div>
                          <div className="diokan-state-box-description diokan-state__approved">
                            Photos sent to client
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {this.getContacts()}
                  </Row>
                </div>
                <div className="diokan-gallery">
                  {this.getImages(session.session_photos)}
                  <Lightbox
                    images={session.session_photos}
                    currentImage={currentImage}
                    isOpen={lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    width={1980}
                  />
                </div>
                {/*<div className="diokan-form-action diokan-form-action__submit">
                 <div className="diokan-form-action__header">
                 <h4 className="diokan-title-primary_sub">
                 Send Photos To Client
                 </h4>
                 <button className="diokan-btn diokan-btn-close-icon">
                 </button>
                 </div>
                 <div className="diokan-form-action__body">
                 <div className="diokan-form-action__description">
                 You’ve uploaded new client photos. <br/>
                 Would you like to send them?
                 </div>
                 <div className="diokan-form__action-group">
                 <button className="diokan-btn diokan-btn-default__big">
                 Cancel
                 </button>
                 <button className="diokan-btn diokan-btn-primary__big">
                 Send To Client
                 </button>
                 </div>
                 </div>
                 </div>*/}
              </div>
            </div>
          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({
    session: state.sessions.selectedSession,
    currentUser: state.user.currentUser
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSession,
    removeSelectedSession
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer)