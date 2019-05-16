import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form id="form">
        <h1 id="add-photo"> Add Photo</h1>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          HTML Link:
          <input type="text" name="name" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;