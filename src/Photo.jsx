import React from "react";

class Photo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.photo.author}</h2>
        <img src={this.props.photo.photo_link}></img>
      </div>
    )
  }
}

export default Photo;