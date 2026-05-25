import Login from "./pages/Login";
import Employ from "./pages/Employ";
import Admin from "./pages/Admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getdata } from "./redux-toolkit/dataslice";

const App = () => {
  const user = useSelector((state) => state.store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdata());
  }, []);
  return (
    <div>
      {user === "login" ? (
        <Login />
      ) : user === "admin" ? (
        <Admin />
      ) : user === "employ" ? (
        <Employ />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
