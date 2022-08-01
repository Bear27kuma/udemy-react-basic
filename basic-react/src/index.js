import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

// Appをidがrootの要素に埋め込む
ReactDom.render(<App/>, document.getElementById('root'));
