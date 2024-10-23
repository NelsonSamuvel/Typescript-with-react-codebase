import { ChangeEvent, createContext, ReactNode, useState } from "react";

type UserType = {
  username: string;
  email: string;
};

type UserContextType = {
  userData: UserType;
  handleUser: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UserContext = createContext<UserContextType>({
  userData: {
    username: "",
    email: "",
  },
  handleUser: () => {},
});

type UserProviderType = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderType) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((cur) => ({ ...cur, [name]: value }));
  };

  return (
    <UserContext.Provider value={{ userData, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
