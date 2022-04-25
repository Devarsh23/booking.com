import axios from 'axios';
const LOGINAPI = 'http://localhost:4000/api/tuits'
const DEALSAPI = 'http://localhost:4000/api/deals'
const AIRLINESAPI = 'http://localhost:4000/api/airlines';

export const findDeals = async () => {
    const response = await axios.get(DEALSAPI);
    // console.log(response.data);
    const datax = response.data;
    return datax;
}
export const findLogin = async () => {
    const response = await axios.get(LOGINAPI);
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

export const createDeal = async (userDeal) => {
        const response = await axios.post(DEALSAPI, userDeal )
        return response.data;

}

export const findAirlines = async () => {
    const response = await axios.get(AIRLINESAPI);
    const datax = response.data;
    return datax;
}