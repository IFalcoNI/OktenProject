import axios from 'axios'

export const addUser = (new_user, history) => async dispatch =>{
    await axios.post("http://localhost:8080",new_user);
    // history.push("/");
}