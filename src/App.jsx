import React from "react";
import Header from "./Header";
import PhotoContainer from "./PhotoContainer";
import Form from "./Form"
import "./_styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { photos: [] }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(author, link) {
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: JSON.stringify({ "author": author, "html_link": link }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ photos: [...this.state.photos, { author: data.author, html_link: data.html_link }] });
        console.log(data);
      })
      .catch(error => console.error('Error', error));
  }

  componentDidMount() {
    console.log('in component did mount')
    fetch('http://localhost:3000/photos')
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data })
        console.log(this.state);
      })
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div id="app">
        <Header />
        <PhotoContainer {...this.state} />
        <Form handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;