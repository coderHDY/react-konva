import React, { Fragment, useEffect, useRef, useState } from 'react';
// import { Stage, Layer, Image } from 'react-konva';
import fabric from "fabricjs";
import { getImgURL } from './utils/helper.ts';
import styles from "./index.module.css"

const App = () => {
  const [items, setItems] = useState([
    {
      src:"616661a885e6f1030718959c",
      x: 300,
      y: 100,
    }, {
      src: "616661a885e6f103071895a9",
      x: 200,
      y: 100,
    }, {
      src: "616661a985e6f103071895b6",
      x: 100,
      y: 100,
    }
  ]);
  const canvasEl = useRef(null);
  const generateImg = () => {}

  const canvas = new fabric.Canvas("c");
  const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
  const img = document.createElement('img');
  img.src = deleteIcon;
  
  useEffect(() => {
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'blue';
    fabric.Object.prototype.cornerStyle = 'circle';
  }, [])
    
  function Add() {
    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      stroke: 'lightgreen',
      strokeWidth: 4,
    });

    canvas.add(rect);
    canvas.setActiveObject(rect);
  }

  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
  });

  Add();

  function deleteObject(eventData, transform) {
		const target = transform.target;
		const canvas = target.canvas;
		    canvas.remove(target);
        canvas.requestRenderAll();
	}

  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    const size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  }

  return (
    <>
      <button onClick={generateImg}>生成</button>
      <canvas id="c" width="400" height="300" style={{border: "1px solid #ccc"}} ref={canvasEl}></canvas>
    </>
  );
}

export default App;