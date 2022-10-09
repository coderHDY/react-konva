import React from 'react';
import Card from './Card';
import styles from "./index.module.css"
const App = () => {
  const Item = () => {
    return (
      <div className={styles.item}>
        <div className={styles["avator-wrapper"]}>
          <img className={styles.avator} src="./bg.jpeg" alt="头像"/>
        </div>
        <div className={styles.content}>啊施法速度发发as啊撒旦发生的发发水电费asdfssssssssssfasdfasdf打发打发多发发啊水电费烧阿四饭店</div>
      </div>
    )
  }
  return (
    <>
      <Card
        src="./Card/bg.jpeg"
        content="你好你好你好你好你好你好你好你好你好"
        footer="底部底部底部底部底部底部"
        optionsAction={() => console.log('---')}
      />
      <Card
        content="你好你好你好你好你好你好你好你好你好"
        footer="底部底部底部底部底部底部"
        icon="🔥"
        optionsAction={() => console.log('---')}
      />
      <Card
        content={<Item />}
      />
      <Card
        src="./Card/bg.jpeg"
        content={<Item />}
      />
      <Card
        src="./Card/bg.jpeg"
        content={<Item />}
        footer="阿斯达撒旦发生的发工会啊覅大法师发"
      />
      <Card
        src="./Card/bg.jpeg"
        content={<Item />}
        footer="阿斯达撒旦发生的发工会啊覅大法师发"
        icon="🔥"
        optionsAction={() => console.log('---')}
      />
      <Card
        src="./Card/bg.jpeg"
        content="你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好你好你好你好你好你好你好好"
        icon="😄"
        optionsAction={() => console.log('---')}
      />
    </>
  );
}

export default App;