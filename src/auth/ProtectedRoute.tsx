import {useNavigate} from "react-router";
import {ReactNode, useEffect} from "react";


export function ProtectedRoute({children}: { children: ReactNode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (token) return children

  useEffect(() => {
    navigate("/")
    alert("Veuillez vous identifier")
  }, [])

}
