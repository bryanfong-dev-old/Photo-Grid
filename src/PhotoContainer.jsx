import React from "react";
import Photo from './Photo';


class PhotoContainer extends React.Component {
  render() {
    const Photos = [];
    this.props.photos.forEach((photo, i) => {
      Photos.push(<Photo
        handleMouseHover={this.props.handleMouseHover}
        photo={photo} />);
    })
    return (
      <div id="photoContainer">
        {Photos}
      </div>
    )
  }
}

export default PhotoContainer;