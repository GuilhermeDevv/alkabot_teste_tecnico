import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Recovery from "../pages/Recovery/Recovery";
import RequestRecovery from "../pages/RequestRecovery/RequestRecovery";
import Feed from "../pages/Feed/Feed";


function RoutesPages() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recovery/:hash" element={<Recovery />} />
            <Route path="/requestPasswordRecovery" element={<RequestRecovery />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default RoutesPages;
