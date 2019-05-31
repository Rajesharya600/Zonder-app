import ApiConstants from './ApiConstants';
import axios from 'axios';

export async function fetchApi(endPoint) {
    return await axios({
        method: 'GET',
        url: ApiConstants.BASE_URL + endPoint,
        timeout: 30000,
    })
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error)
        })
}