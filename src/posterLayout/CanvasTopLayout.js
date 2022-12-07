import React, { Component } from "react";
import { Image } from "react-konva";

class CanvasTopLayout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      image: null,
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
        <Image
          image={this.state.image}
          x={10}
          y={50}
          width={500}
          height={160}
          cornerRadius={30} />
    );
  }
}

export default CanvasTopLayout;
