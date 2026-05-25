import Employnav from "../components/Employnav";
import Createtask from "../components/Createtask";
import Admintasklist from "../components/Admintasklist";
import Adminnav from "../components/Adminnav";

const Admin = () => {
  return (
    <div className="bg-gray-200">
      <Adminnav />
      <div className="pt-25">
        <Createtask />
        <Admintasklist />
      </div>
    </div>
  );
};

export default Admin;
