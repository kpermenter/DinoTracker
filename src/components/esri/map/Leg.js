import React from 'react';
import Img from "./legend.png"

export default class Legend extends React.Component {
  render() {
    return (
          <img src={Img} style={{width: 200}}/>
          
    );
  }
}