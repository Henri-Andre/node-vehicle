export const formatUser = (user) => {
    return {
      id: user._id,
      name: user.name,
      first_name: user.first_name,
      email: user.email,
      password: user.password,
      image : user.image
    };
  };
  
  export const formatUsers = (users) => {
    return users.map(formatUser);
  };