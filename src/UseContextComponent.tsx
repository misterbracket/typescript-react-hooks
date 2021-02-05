import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}
export function useUserContext() {
  return useContext(UserContext);
}

export default function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button onClick={() => userSet({ first: "Josy", last: "Smith" })}>
          Change Context
        </button>
      </UserContext.Provider>
    </div>
  );
}
