import { Info } from "./type";

const UserInfo = ({ id, name, email }: Info) => {
  return (
    <div>
      <h1>
        {name} - #{id}
      </h1>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
