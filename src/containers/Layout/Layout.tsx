import React from "react";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <HeaderContainer/>
            <Outlet/>
        </>
    )
}