import React, { Component } from "react";
import { Image } from "react-konva";

class CanvasBackground extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    const image = new window.Image();
    image.src = "https://user-images.githubusercontent.com/78197675/206168147-7917fc2b-bd32-4e67-9be7-7d28457711fe.png";
    image.onload = () => {
      this.setState({
        image: image,
      });
    };
  }

  render() {
    return (
        <Image
          image={this.state.image}
          x={10}
          y={150}
          width={500}
          height={1200}
          cornerRadius={30} />
    );
  }
}

export default CanvasBackground;
