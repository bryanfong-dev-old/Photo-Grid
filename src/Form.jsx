import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form id="form">
        <h1 id="add-photo"> Add Photo</h1>
        <label>
          Name:
          <input type="text" id="author" name="author" placeholder="Please put a real name" />
        </label>
        <label>
          HTML Link:
          <input type="text" id="link" name="link" placeholder="Link must be jpeg, jpg, gif, or png" />
        </label>
        <input type="submit" value="Submit" onClick={(e) => {
          e.preventDefault();
          if (link.value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            console.log(author.value);
            this.props.handleClick(author.value, link.value);
          }
          author.value = "";
          link.value = "";
        }} />
      </form>
    )
  }
}

export default Form;