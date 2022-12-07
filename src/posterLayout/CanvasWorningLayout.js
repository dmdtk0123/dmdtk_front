import React, { Component } from "react";
import { Image, Text, Group, Rect } from "react-konva";

class CanvasWorningLayout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
        <Text
          text={this.state.text}
          x={120}
          y={1300-60}
          width={260}
          fontSize={12}
          fontFamily={"Calibri"}
          fill="black"
          align="center"
        />
    );
  }
}

export default CanvasWorningLayout;
