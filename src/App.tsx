import DisplayUser from "./04.Context-Api/DisplayUser";
import User from "./04.Context-Api/User";
import UserProvider from "./04.Context-Api/UserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
        <User />
        <DisplayUser />
      </UserProvider>
    </div>
  );
};

export default App;
