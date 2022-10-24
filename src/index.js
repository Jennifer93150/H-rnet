import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store , persistor } from "./redux/store";

/** pages */
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/Employee-list';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
     <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route exact path="/" index element={<CreateEmployee/>}/>
            <Route path="/employees" index element={<EmployeeList/>}/>
          </Routes>
      </PersistGate>
     </Provider> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
