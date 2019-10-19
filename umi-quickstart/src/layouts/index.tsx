import React from 'react';
import styles from './index.css';
function Login(props: any) {
  return (
    <div>
      <span>login:{props.name}</span>
    </div>
  );
}
const BasicLayout: React.FC = (props: any) => {
  if (props.location.pathname === '/login') {
    return <Login name="Tocean">Tocean</Login>;
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
