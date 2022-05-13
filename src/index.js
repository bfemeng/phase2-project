// import React from "react";
// import App from "./components/App";
// import './index.css';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//reportWebVitals();