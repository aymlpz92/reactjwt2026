import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router";
import {getRoles} from "./auth.service";

interface props {
  roles: string[];
  children: ReactNode | ReactNode[];
}


export function RoleRoute( { roles, children }: props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (token) {
    const role = getRoles(token)
    console.log(role);
    console.log(role);

    if (roles.includes(role)) {
      return children
    } else {
      useEffect(() => {
        navigate('/')
        alert("Accès interdit");
      }, [])
    }


  }


}
