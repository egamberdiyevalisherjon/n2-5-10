import useFetch from "../hooks/useFetch";
import { useCallback, useEffect, useMemo } from "react";
import axios from "axios";

const Users = () => {
  const [users, loading, isError, error] = useFetch("/users?_limit=4");

  const placeholderUser = useMemo(() => {
    return {
      name: "Eshmat",
      email: "eshmat@gmail.com",
    };
  }, []);

  function handleAddUser() {}

  const callbackHandleAddUser = useCallback(handleAddUser, []);
  const memoizedHandleAddUser = useMemo(() => {
    return handleAddUser;
  }, []);

  useEffect(() => {
    axios.post("/users", placeholderUser).then(({ data }) => console.log(data));
  }, [axios, placeholderUser, memoizedHandleAddUser, callbackHandleAddUser]); 

  return (
    <div>
      <h1 className="display-4 my-3">Users</h1>
      <form onSubmit={handleAddUser} className="my-3">
        <div>
          <label htmlFor="username" className="form-label">
            Your name
          </label>
          <div className="d-flex gap-3">
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Eshmat"
            />
            <button className="btn btn-success">Qoshish</button>
          </div>
        </div>
      </form>
      {isError ? (
        <h2>
          An error occurred while getting users. Please contact developer.
        </h2>
      ) : loading ? (
        <h2>Loading....</h2>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {" "}
              {user.name}{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
