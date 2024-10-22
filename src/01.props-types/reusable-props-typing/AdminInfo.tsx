import { AdminInfoList } from "./type";

const AdminInfo = ({
  name,
  id,
  usersCount,
  lastLogin,
  email,
}: AdminInfoList) => {
  return (
    <div>
      <h1>#{name}</h1>
      <h2>{id}</h2>
      <h2>{email}</h2>
      <p>{usersCount}</p>
      <p>{lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
