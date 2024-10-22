type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  usersCount: number;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
