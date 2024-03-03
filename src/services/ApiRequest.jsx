
import axios from 'axios';

const API = axios.create({ baseURL: `https://pontogo-api.herokuapp.com`, headers: { 'Authorization': '4A39A7E3-BBBE-4DAA-5109-6CD512993931' } });

async function cadastroEmpresa(dados) {
   
    return await API.post(`/register-company`, dados)
} 








const requests = {
    cadastroEmpresa,
    // GetPoinst,
}

export default requests;