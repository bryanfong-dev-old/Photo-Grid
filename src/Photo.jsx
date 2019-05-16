import React from "react";

class Photo extends React.Component {
  render() {
    return (
      <div className='photo-div'>
        <img src={this.props.photo.photo_link}></img>
        <h2>{this.props.photo.author}</h2>
      </div>
    )
  }
}

export default Photo;