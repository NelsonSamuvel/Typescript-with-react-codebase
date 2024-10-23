import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const {
    userData: { username, email },
    handleUser,
  } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleUser}
      />

      <input type="text" name="email" value={email} onChange={handleUser} />
    </div>
  );
};

export default User;
