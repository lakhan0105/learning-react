export const addUserLS = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserLS = () => {
  localStorage.removeItem("user");
};

export const getUserLS = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
