import { Navigate } from "react-router-dom";

function PrivateRoute({ session, children }) {
  return session ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
