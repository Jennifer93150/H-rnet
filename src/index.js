import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

/** pages */
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/Employee-list';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" index element={<CreateEmployee/>}/>
      <Route path="/employees" index element={<EmployeeList/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
