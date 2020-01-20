/* import api from "../api";

export const getUsers = () => {
  api.user
    .getUsers()
    .then(response => {
        console.log('response', response)
      if (response.error) {
        return { error: response.error };
      } else {
          console.log('redata', response.data)
        return response.data
      }
    })
    .catch(error => ({ error }));
};
 */