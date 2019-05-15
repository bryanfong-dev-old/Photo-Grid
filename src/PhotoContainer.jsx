import React from "react";
import Photo from './Photo';


class PhotoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    console.log('in componentdidmount')
    fetch('http://localhost:3000/photos')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ photos: data })
        console.log(this.state);
      });
  }


  render() {
    const Photos = [];
    this.state.photos.forEach((link, i) => {
      Photos.push(<Photo photo={this.state.photos[i]} />);
    })

    return (
      <div id="photoContainer">
        {Photos}
      </div>
    )
  }
}

export default PhotoContainer;