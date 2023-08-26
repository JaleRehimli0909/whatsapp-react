import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import { Button, Result } from 'antd';
import { Login, Main } from "./pages";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<Outlet />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          </Route>

          <Route path="*" element={<Navigate to={process.env.REACT_APP_404}/>}/>
          <Route
            path="404"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button href={process.env.REACT_APP_HOME} type="primary">Back Home</Button>}
              />
            }
          />
  
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
