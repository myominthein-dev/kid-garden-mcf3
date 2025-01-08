import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageLoading from "./PageLoading";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default PublicLayout;
