
import axios from 'axios';
const LOGINAPI = 'http://localhost:4000/api/tuits'

export const findLogin = async () => {
    const response = await axios.get(LOGINAPI);
    console.log(response.data);
    const datax = response.data;
    return datax;
}

export const createUser = async (user) => {
    try {
        const response = await axios.post(LOGINAPI, user)
        return response.data;
    }
    catch (e) {
        console.log(e);
    }

}


