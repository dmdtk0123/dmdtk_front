import React, { Component } from "react";
import { Image, Text, Group, Rect } from "react-konva";

class CanvasLeftLayout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      image: null,
      text: props.text,
    };
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = "data:image/jpg;base64," + this.props.b64Image;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image,
      });
    };
  }

  render() {
    const y = this.props.y;

    return (
      <Group style={{ background: "red" }}>
        <Rect
          x={30}
          y={y}
          fill="white"
          width={450}
          height={90}
          cornerRadius={30}
        />
        <Image
          image={this.state.image}
          x={30}
          y={y}
          width={150}
          height={90}
          cornerRadius={30}
        />
        <Text
          text={this.state.text}
          x={190}
          y={y+20}
          width={260}
          fontSize={12}
          fontFamily={"Calibri"}
          fill="black"
          align="center"
        />
      </Group>
    );
  }
}

export default CanvasLeftLayout;
