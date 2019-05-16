import React from "react";
import Header from "./Header";
import PhotoContainer from "./PhotoContainer";
import Form from "./Form"
import "./_styles.css";

class App extends React.Component {
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
    return (
      <div id="app">
        <Header />
        <PhotoContainer {...this.state} />
        <Form />
      </div>
    )
  }
}

export default App;