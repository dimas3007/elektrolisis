export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const deleteUser = () => {
  return {
    type: "DELETE_USER",
    payload: [],
  };
};
