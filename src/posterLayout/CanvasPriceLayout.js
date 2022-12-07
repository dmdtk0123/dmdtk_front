import React, { Component } from "react";
import { Image, Text, Group } from "react-konva";

class CanvasPriceLayout extends Component {
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
      this.setState({
        image: image,
      });
    };
  }

  render() {
    return (
      <Group>
        <Image
          image={this.state.image}
          x={120}
          y={720}
          width={280}
          height={150}
          cornerRadius={30} />
        <Text
            text={this.state.text}
            x={130}
            y={900}
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

export default CanvasPriceLayout;
