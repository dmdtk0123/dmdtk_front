import React from 'react';
import { Stage, Layer } from 'react-konva';

import CanvasBackground from './CanvasBackground';
import CanvasLeftLayout from './CanvasLeftLayout';
import CanvasRightLayout from './CanvasRightLayout';
import CanvasTopLayout from './CanvasTopLayout';
import CanvasPriceLayout from './CanvasPriceLayout';
import CanvasWorningLayout from './CanvasWorningLayout';

const Canvas = () => {
  const finalResult = JSON.parse(localStorage.getItem('final_result'));
  const textData = JSON.parse(localStorage.getItem('text_data'));

  return (
    <Stage width={500} height={1360}>
      <Layer>
        <CanvasTopLayout b64Image={finalResult[2].image} />
        <CanvasBackground />
        <CanvasLeftLayout y={310} b64Image={finalResult[1].image} text={finalResult[1].text} />
        <CanvasRightLayout y={410} b64Image={finalResult[3].image} text={finalResult[3].text} />
        <CanvasLeftLayout y={510} b64Image={finalResult[4].image} text={finalResult[4].text} />
        <CanvasPriceLayout b64Image={finalResult[5].image} text={textData['text_price']} />
        <CanvasWorningLayout text={textData['text_notice']} />
      </Layer>
    </Stage>
  );
};

export default Canvas;
