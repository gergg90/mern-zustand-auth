import { useAuthStore } from "@/stores/auth";
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const isAuth = useAuthStore.getState().isAuth;

  if (!isAuth) return <Navigate to="/login" />;
  return <>{children}</>;
}

export default ProtectedRoute;
