import Legend from "./esri/map/Leg";
import React from "react";

class Test extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        style : {
            width : 0
        }
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
}

componentDidMount() {
    document.addEventListener("click", this.closeNav);
}

componentWillUnmount() {
    document.removeEventListener("click", this.closeNav);
}

openNav() {
    const style = { width : 270 };
    this.setState({ style });
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.addEventListener("click", this.closeNav);
}

closeNav() {
    document.removeEventListener("click", this.closeNav);
    const style = { width : 0 };
    this.setState({ style });
    document.body.style.backgroundColor = "#F3F3F3";
}

render() {
    return (
      <div>
<button className="legendClick" style={{fontSize:20,cursor:"pointer"}} onClick={this.openNav}>&#9776; Legend</button>
        <div
            ref       = "snav"
            className = "overlay"
            style     = {this.state.style}
        >
            <div className = "sidenav-container">
                <div className = "text-center">
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>Geological Time</p>
                </div>
                <a
                    href      = "javascript:void(0)"
                    className = "closebtn"
                    onClick   = {this.closeNav}
                >
                    ×
                </a>
              <div className = "list-group">
                  {<Legend></Legend>}
                  {this.props.children}
              </div>
            </div>
        </div>
      </div>
    );
}
}
export default Test;