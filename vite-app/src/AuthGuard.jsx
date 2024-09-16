import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
console.log('authguard');

  useEffect(()=>{
    if (!token) {
        navigate("/login");
      } else {
        navigate('/product');
      }
  },[navigate, token])
  

  return children;
};

export default AuthGuard;
