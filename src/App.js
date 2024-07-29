import React from "react";
import "antd/dist/antd.js";
import HomeTodo from "./components/HomeTodo/HomeTodo";
import {Routes, Route } from "react-router-dom";
import Authorization from "./components/Form/Authorization/Authorization";
import RegisterPage from "./components/Form/Register/RegisterPage";
import PrivateRoute from "./components/Form/PrivateRoute/PrivateRoute";


const App = () => {

  return (
      <div>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route element={<PrivateRoute />}>
              <Route path="/homeTodoList"  element ={<HomeTodo />}/>
          </Route>
        </Routes>
      </div>
  ); 
};

export default App;
