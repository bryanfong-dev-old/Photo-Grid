import React from "react";
import Photo from './Photo';


class PhotoContainer extends React.Component {
  render() {
    const Photos = [];
    this.props.photos.forEach((link, i) => {
      Photos.push(<Photo photo={this.props.photos[i]} />);
    })
    return (
      <div id="photoContainer">
        {Photos}
      </div>
    )
  }
}

export default PhotoContainer;