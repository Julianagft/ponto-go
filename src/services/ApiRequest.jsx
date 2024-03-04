
import axios from 'axios';

const API = axios.create({ baseURL: `https://pontogo-api.herokuapp.com`, headers: { 'Authorization': '4A39A7E3-BBBE-4DAA-5109-6CD512993931' } });

async function cadastroEmpresa(dados) {
   
    return await API.post(`/register-company`, dados);
} 

async function cadastroColaborador(dados) {
    return await API.post(`/register-employees?company-token-pg=InAcwq6mDMAzy0ubHDuc`, dados);
}











const requests = {
    cadastroEmpresa,
    cadastroColaborador,
}

export default requests;