import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageLoading from "./PageLoading";

const PublicLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // Show fallback for 3000ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {loading ? (
        <PageLoading />
      ) : (
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      )}
    </main>
  );
};

export default PublicLayout;
