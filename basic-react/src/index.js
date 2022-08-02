import React from 'react';
// React18ではReactDOMを使用しない
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// Appをidがrootの要素に埋め込む
// ReactDOM.render(<App/>, document.getElementById('root'));

// React18ではReactDOMを使用しないため、以下の記述でレンダリングする
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
