import React from 'react';

export default function() {
  let ourstyle = {
    height: 8000,
  };
  return (
    <div>
      <div style={ourstyle}>
        <ul>
          <li>top demo</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>under </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
