import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form id="form">
        <h1 id="add-photo"> Add Photo</h1>
        <label>
          Name:
          <input type="text" name="author" required />
        </label>
        <label>
          HTML Link:
          <input type="text" name="link" required />
        </label>
        <input type="submit" value="Submit" onClick={this.props.handleClick} />
      </form>
    )
  }
}

export default Form;