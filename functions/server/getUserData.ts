import type { User } from "../../types/models";

const getUserData = async (_id: string | null): Promise<User | null> => {
  if (_id === null) return null;
  const response = await fetch(`http://localhost:3000/api/users/${_id}`);

  switch (response.status) {
    case 200:
      return (await response.json()).data as User;
    default:
      return null;
  }
};

export default getUserData;
