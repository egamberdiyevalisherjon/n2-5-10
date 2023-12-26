import { useEffect, memo, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isUnmounted = false;
    const wait = (delay) => new Promise((res) => setTimeout(res, delay));

    (async function () {
      const { data } = await axios.get("/users");
      await wait(5000);
      if (isUnmounted) return;
      setUsers((prevUsers) => [...prevUsers, ...data]);
    })();

    return () => {
      isUnmounted = true;
    };
  }, [setUsers]);

  return (
    <div>
      Home
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default memo(Home);
