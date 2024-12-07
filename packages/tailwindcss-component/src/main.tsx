import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
// import 'virtual:uno.css';
import "./index.css";

const container = document.getElementById('app')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);