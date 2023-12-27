import { useEffect, memo, useState } from "react";
import useFetch from '../hooks/useFetch';

const Home = () => {
  const [users, loading, isError, error] = useFetch("/users");

  if (isError) console.log(error);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   let isUnmounted = false;
  //   const wait = (delay) => new Promise((res) => setTimeout(res, delay));

  //   (async function () {
  //     const { data } = await axios.get("/users");
  //     await wait(5000);
  //     if (isUnmounted) return;
  //     setUsers((prevUsers) => [...prevUsers, ...data]);
  //   })();

  //   return () => {
  //     isUnmounted = true;
  //   };
  // }, [setUsers]);

  return isError ? (
    <h1>An error occurred. Look at the console</h1>
  ) : loading ? (
    <h1>Loading...</h1>
  ) : (
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
