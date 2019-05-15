import React from "react";

class Photo extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.link}></img>
      </div>
    )
  }
}

export default Photo;