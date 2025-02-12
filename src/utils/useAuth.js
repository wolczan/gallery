// useAuth.js
import { useContext } from "react";
import AuthContext from "./authContext"; // ✅ Poprawny import

export function useAuth() {
  const context = useContext(AuthContext);
  console.log("useAuth() zwróciło:", context);
  return context;
}
