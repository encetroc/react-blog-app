import { useEffect, useState } from "react";
import { User } from "./User";

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((data) => data.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User
          img={user.picture.thumbnail}
          firstname={user.name.first}
          lastname={user.name.last}
        />
      ))}
    </div>
  );
}
