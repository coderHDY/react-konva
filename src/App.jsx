import React, { Fragment, useRef, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { getImgURL } from './utils/helper.ts';
import styles from "./index.module.css"

const KonvaImg = (props) => {
  const [show , setShow] = useState(false);
  const img = new window.Image(350, 600);
  img.crossOrigin = 'Anonymous';
  img.src = getImgURL(props.src);
  img.addEventListener("load", () => setShow(true));
  return (
    show ? 
    <Image
      image={img}
      stroke="#fff"
      strokeWidth={0}
      {...props}
    /> 
    : <></>
  )
}

const App = () => {
  const stageRef = useRef(null);
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
  const generateImg = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
  }
  const handleDragStart = (e) => {
    const src = e.target.name();
    const newItems = items.slice();
    const idx = items.findIndex(item => item.src === src);
    const item = newItems.splice(idx, 1)[0];
    newItems.push(item);
    setItems(newItems);
  };
  const handleDragEnd = (e) => {
    const src = e.target.name();
    const newItems = items.slice();
    const index = newItems.findIndex(item => item.src === src);
    newItems[index] = {
      src,
      x: e.target.x(),
      y: e.target.y(),
    };
    setItems(newItems);
  }
  return (
    <>
      <button onClick={generateImg}>生成</button>
      <Stage width={window.innerWidth} height={window.innerHeight} className={styles["stage"]} ref={stageRef}>
        <Layer>
          {
            items.map(({src, x, y}, i) => {
              return (
              <Fragment key={src}>
                  <KonvaImg
                    name={src}
                    src={src}
                    shadowOffset={{x: 5, y: 5}}
                    shadowOpacity={0.2}
                    x={x}
                    y={y}
                    draggable={true}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                </Fragment>
              )
            })
          }
        </Layer>
      </Stage>
    </>
  );
}

export default App;