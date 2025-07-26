import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthContext";

import App from "./app";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

function Home() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<App />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        {/* <Toaster /> */}
        {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        /> */}
      </Router>
    </AuthProvider>
  );
};

export default Home;
