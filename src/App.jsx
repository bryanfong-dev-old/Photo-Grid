import React from "react";
import Header from "./Header";
import PhotoContainer from "./PhotoContainer";
import "./_styles.css";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <PhotoContainer />
      </div>
    )
  }
}

export default App;