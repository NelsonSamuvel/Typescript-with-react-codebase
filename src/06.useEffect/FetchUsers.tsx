import { useEffect, useState } from "react";

type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const FetchUsers = () => {
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Fetch Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>Name:{user.name}</h1>
            <h2>Username :{user.username}</h2>
            <p>Email :{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchUsers;
