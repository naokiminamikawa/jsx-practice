import { users } from "../data/data.js";

const Exercise1 = () => {
  return (
    <ul>
      {users.map((user) =>
        user.age >= 18 ? (
          <li key={user.id}>{user.name}(成人)</li>
        ) : (
          <li key={user.id}>{user.name}</li>
        ),
      )}
    </ul>
  );
};

export default Exercise1;
