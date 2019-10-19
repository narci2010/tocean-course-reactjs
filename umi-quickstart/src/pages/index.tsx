/**
 * title: Index Page
 * Routes:
 *   - ./src/routers/a.jsx
 *   - ./src/routers/b.jsx
 */
import React from 'react';
import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <Link to="/transition">Go to transition page</Link>
        </li>
        <li>
          <Link to="/transition/Breakcrumbs">Go to Breakcrumbs page</Link>
        </li>
        <li>
          <Link to="/top">Go to top page</Link>
        </li>
      </ul>
    </div>
  );
}
