import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //
    // | authentication | authStatus | Meaning                        | Result   |
    // | -------------- | ---------- | ------------------------------ | -------- |
    // | true           | false      | Protected route, not logged in | `/login` |
    // | true           | true       | Protected route, logged in     | allow    |
    // | false          | true       | Public route, logged in        | `/`      |
    // | false          | false      | Public route, not logged in    | allow    |

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);

    //  //   easy way
    //     if (authStatus === true) {
    //       navigate("/");
    //     } else if(authStatus === false){
    //       navigate("/login");
    //     }
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : { children };
};

export default Protected;
