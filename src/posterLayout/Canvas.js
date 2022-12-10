import React from 'react';
import { Stage, Layer } from 'react-konva';

import CanvasBackground from './CanvasBackground';
import CanvasLeftLayout from './CanvasLeftLayout';
import CanvasRightLayout from './CanvasRightLayout';
import jsonData from '../json_matching-result.json';
import CanvasTopLayout from './CanvasTopLayout';
import CanvasPriceLayout from './CanvasPriceLayout';
import CanvasWorningLayout from './CanvasWorningLayout';
import jsonFormData from '../json_form-data.json';

const Canvas = () => {
  return (
    <Stage width={500} height={1360}>
      <Layer>
        <CanvasTopLayout b64Image={jsonData[2].image} />
        <CanvasBackground />
        <CanvasLeftLayout y={310} b64Image={jsonData[1].image} text={jsonData[1].text} />
        <CanvasRightLayout y={410} b64Image={jsonData[3].image} text={jsonData[2].text} />
        <CanvasLeftLayout y={510} b64Image={jsonData[5].image} text={jsonData[3].text} />
        <CanvasPriceLayout b64Image={jsonData[5].image} text={jsonFormData['text_price']} />
        <CanvasWorningLayout text={jsonFormData['text_notice']} />
      </Layer>
    </Stage>
  );
};

export default Canvas;
