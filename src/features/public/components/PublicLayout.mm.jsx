import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "./PageLoading";
import Drager from "./Drager";
import myIcon from "../../../assets/all/pencil-icon.png";
import Header from "./Header.mm";

export const PublicLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // Show fallback for 3000ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        cursor: `url(${myIcon}), auto`, // Use imported file
      }}
      className=" cursor- flex flex-col min-h-screen"
    >
      <Header />
      {loading ? (
        <PageLoading />
      ) : (
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      )}

      <Drager />
    </main>
  );
};


