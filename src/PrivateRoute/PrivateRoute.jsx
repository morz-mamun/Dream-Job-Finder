import { Navigate } from "react-router-dom";
import useAuthProvider from "../CustomHooks/useAuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuthProvider()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to={'/'} replace></Navigate>
    
};

export default PrivateRoute;