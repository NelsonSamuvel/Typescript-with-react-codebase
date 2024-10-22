//for props-types we can use type or interface

import { FC } from "react";

// type UserTypes = {
//   name: string;
//   age: number;
//   isSingle: boolean;
// };

interface UserTypes {
  name: string;
  age: number;
  isSingle: boolean;
}

// const User = ({ name, age, isSingle }: UserTypes) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <small>{isSingle ? "Single" : "Committed"}</small>
//     </div>
//   );
// };

//older way of assigning a types to the components
//FC - functional components
const User: FC<UserTypes> = ({ name, age, isSingle }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <small>{isSingle ? "Single" : "Committed"}</small>
    </div>
  );
};

export default User;
