
import axios from 'axios';

const API = axios.create({ baseURL: `https://pontogo-api.herokuapp.com`, headers: { 'Authorization': '4A39A7E3-BBBE-4DAA-5109-6CD512993931' } });

async function cadastroEmpresa(dados) {
   
    return await API.post(`/register-company`, dados);
} 

async function cadastroColaborador(dados) {
    return await API.post(`/register-employees?company-token-pg=InAcwq6mDMAzy0ubHDuc`, dados);
}

async function registroDePonto(dados) {
    return await API.post(`/add-point?company-token-pg=H5mpdUQQ0hOPkFlDIH38&employee-token-pg=LnCDFZnDSCgbY44lguFh`, dados);
}

async function capturaDePonto(dados) {
    return await API.get(`/get-points?initialDate=27/07/2023&endDate=28/07/2023&company-token-pg=UzvHVAgzFFuU9tj080UT&employee-token-pg=dqWBQAsDllyD8jA46eCp`, dados);
}


const requests = {
    cadastroEmpresa,
    cadastroColaborador,
    registroDePonto,
    capturaDePonto,
}

export default requests;