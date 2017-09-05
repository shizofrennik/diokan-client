import React from 'react';
import PropTypes from 'prop-types';

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      deleteSpinner: false,
      thumbnailUploaded: false,
      thumbnailReady: true,
      intervalId: null
    }
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this); 
    this.handleMouseLeave = this.handleMouseLeave.bind(this); 
    this.checkImageStatus = this.checkImageStatus.bind(this);
  }

  static propTypes = {
    file: PropTypes.object,
    deleteFile: PropTypes.func,
    generateThumbnail: PropTypes.bool
  };
  
  componentWillMount() {
    let {generateThumbnail, file} = this.props;
    if(generateThumbnail) {
      this.checkImageStatus(file.thumbnail);
      let intervalId = setInterval(() => this.checkImageStatus(file.thumbnail), 5000);
      this.setState({thumbnailReady: false, intervalId});
    }
  }
  
  checkImageStatus(url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
        clearInterval(this.state.intervalId);
        this.setState({thumbnailReady: true});
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
  }
  
  handleMouseEnter() {
    this.setState({hovered: true})
  }
  
  handleMouseLeave() {
    this.setState({hovered: false})
  }
  
  render() {
    let {file, deleteFile, clickHandler} = this.props;
    let {deleteSpinner, thumbnailReady, hovered} = this.state;
    return (
      <div 
        className="diokan-gallery__item" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>
        {thumbnailReady ? 
        <a href="#">
          <img src={file.thumbnail} alt="photo" className="img-fluid"/>
        </a> :
          <i className="fa fa-spinner fa-spin" style={{position: 'relative', top: '100px', left: '50%'}}/> }
        {thumbnailReady && hovered &&
        (<div className="diokan-gallery__item-hovered">
          <a 
            className="diokan-gallery__item-hovered-view" 
            href="#" 
            onClick={clickHandler}>
            View Image
          </a>
          {deleteFile && (
            <a
              className="diokan-gallery__item-hovered-delete"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                deleteFile(file.id);
                this.setState({deleteSpinner: true})
              }}>
              {deleteSpinner ? <i className="fa fa-spinner fa-spin" /> : <i className="fa fa-trash-o" />}
            </a>
          )}
        </div>)}
      </div>
    )
  }
}

export default GalleryItem;