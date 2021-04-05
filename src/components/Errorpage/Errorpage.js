import React from "react";
import "./Errorpage.scss";

class Errorpage extends React.Component {
  state = {
    hasErrored: false,
  };
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="Errorpage">
          <h1>Sorry this page is broken</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Errorpage;
