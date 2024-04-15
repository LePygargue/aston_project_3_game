// frontend/src/components/features/index.js
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./assets/Authentication.css";

const Authentication = () => {
    return (
        <div className="container">
            <div className="background">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    );
};

export default Authentication;
