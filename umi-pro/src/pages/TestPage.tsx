import React from 'react';
// import ReactDOM from 'react-dom';
// TestPage.ts
import { Select, Icon } from 'antd';
import styles from './TestPage.less';
import { ReactComponent as Love } from '../assets/love.svg';
const Option = Select.Option;

export default function() {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  console.log(children);
  return (
    <div>
      <Icon type="heart" style={{ fontSize: '16px', color: 'hotpink' }} />

      <Select
        mode="multiple"
        style={{ width: 300 }}
        placeholder="Please select"
        className={styles.customSelect}
      >
        {children}
      </Select>
      <Love />
    </div>
  );
}
