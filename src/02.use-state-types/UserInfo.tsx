import { ChangeEvent, useState } from "react";

type UserType = {
  username: string;
  age: number;
  email: string;
};

const UserInfo = () => {
  const [user, setUser] = useState<UserType>({
    username: "",
    age: 0,
    email: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUser((curUser) => ({
      ...curUser,
      [name]: name === "age" ? (Number(value) > 0 ? Number(value) : "") : value,
    }));
  }

  console.log(typeof user.age);

  return (
    <div>
      <h1>Challenge-2 User Information</h1>
      <div>
        <h2>Username :{user.username}</h2>
        <h3>Age:{user.age}</h3>
        <h4>Email :{user.email}</h4>
      </div>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
        placeholder="Username"
      />{" "}
      <br /> <br />
      <input
        type="number"
        name="age"
        value={user.age > 0 ? user.age : ""}
        onChange={handleChange}
        placeholder="Age"
      />{" "}
      <br /> <br />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </div>
  );
};

export default UserInfo;
