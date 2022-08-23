import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Box pl={12} pr={12} pt={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
