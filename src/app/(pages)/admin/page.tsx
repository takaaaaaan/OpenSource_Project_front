"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold">admin</h1>
    </div>
  );
};

export default AdminPage;
