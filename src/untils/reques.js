import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
export const get = async (path, option = {}) => {
    const respone = await request.get(path, option);
    return respone;
};
export default request;
