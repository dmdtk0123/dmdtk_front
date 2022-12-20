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

  const resultImg = finalResult['image'];
  const resultText = finalResult['text'];

  return (
    <Stage width={500} height={1360}>
      <Layer>
        <CanvasTopLayout b64Image={resultImg.farm_landscape} />
        <CanvasBackground />
        <CanvasLeftLayout y={310} b64Image={resultImg.close_shot} text={resultText.taste} />
        <CanvasRightLayout y={410} b64Image={resultImg.box} text={resultText.culture} />
        <CanvasLeftLayout y={510} b64Image={resultImg.sweetness} text={resultText.sweetness} />
        <CanvasPriceLayout b64Image={resultImg.size_comparison} text={textData['text_price']} />
        <CanvasWorningLayout text={textData['text_notice']} />
      </Layer>
    </Stage>
  );
};

export default Canvas;
