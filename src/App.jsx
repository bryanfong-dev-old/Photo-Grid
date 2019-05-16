import React from "react";
import Header from "./Header";
import PhotoContainer from "./PhotoContainer";
import Form from "./Form"
import "./_styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      photos: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleClick(author, link) {
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: JSON.stringify({ "author": author, "html_link": link }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(2);
        this.setState({ photos: [...this.state.photos, { ...data }] });
      })
      .catch(error => console.error('Error', error));
  }

  handleMouseHover(id) {
    fetch('http://localhost:3000/photos', {
      method: 'PUT',
      body: JSON.stringify({
        _id: id,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        const newPhotos = JSON.parse(JSON.stringify(this.state.photos))
        for (let photo in newPhotos) {
          if (newPhotos[photo]._id === id) {
            newPhotos[photo].isHovering = data.isHovering
            break;
          }
        }
        this.setState({ photos: [...newPhotos] });
      })
      .catch(error => console.error('Error', error));
  }


  componentDidMount() {
    fetch('http://localhost:3000/photos')
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data })
      })
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div id="app"
      >
        <Header />
        <PhotoContainer {...this.state} handleMouseHover={this.handleMouseHover} />
        <Form handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;