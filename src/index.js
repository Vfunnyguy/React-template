import React from "react";

import { createRoot } from 'react-dom/client';
import './styles/Css/index.css'
import './styles/Sass/style.scss'
import App from './App.jsx'
const app=document.getElementById('root')
const root=createRoot(app)
root.render(<App/>)
