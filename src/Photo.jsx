import React from "react";

class Photo extends React.Component {
  render() {
    return (
      <div className='photo-div'>
        {(this.props.photo.isHovering % 2 === 1) &&
          <h2>{this.props.photo.author}</h2>
        }
        <img src={this.props.photo.html_link}
          id={this.props.photo._id}
          onMouseEnter={(e) => {
            this.props.handleMouseHover(e.target.id);
          }}
          onMouseLeave={(e) => {
            this.props.handleMouseHover(e.target.id);
          }}
        />
      </div>
    )
  }
}

export default Photo;