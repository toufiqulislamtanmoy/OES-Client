
import { useContext } from "react";
import { Dna } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex flex-col space-y-6 items-center justify-center h-[70vh]">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  if (!user) {
    return (<Navigate to="/login" state={{ from: location }} replace></Navigate>);
  }
  return children;
};

export default PrivetRoute;