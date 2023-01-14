import axios from 'axios';
import { ENDPOINT } from '../App';

const loginApi = async (email, password) => {
    const resp = await axios.post(`${ENDPOINT}/user/login`,
        {
            email: email,
            password: password
        },
    )  
    comsole.log("deneme")
    console.log(resp)

    return resp.status === 201 ? resp.data : false
}

module.exports={
    loginApi,

}