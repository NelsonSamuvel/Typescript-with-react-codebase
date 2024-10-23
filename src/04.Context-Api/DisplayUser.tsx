import { useContext } from "react";
import { UserContext } from "./UserContext";

const DisplayUser = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>User Information</h1>
      <ul>
        <li>Username :{userData.username}</li>
        <li>Email : {userData.email}</li>
      </ul>
    </div>
  );
};

export default DisplayUser;
