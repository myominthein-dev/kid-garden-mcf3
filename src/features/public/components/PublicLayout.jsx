import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
        <Outlet />
      
    </main>
  );
};

export default PublicLayout;
