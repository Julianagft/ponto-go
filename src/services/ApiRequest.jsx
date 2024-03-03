
import axios from 'axios';


    async function cadastroEmpresa() {
        const URL = `https://pontogo-api.herokuapp.com/register-company`;
        

        try{
            const response = await axios.post(URL, dados, {
                
                headers: {
                'Authorization': '4A39A7E3-BBBE-4DAA-5109-6CD512993931'
                }
            })

            console.log('Dados da resposta da API:', dados);
            return response.data;

        }catch(error) {
            console.error('Ocorreu um erro na solicitação:', error.message);
        }
    }

// async function GetPoinst() {
//     const apiUrl = `https://pontogo-api.herokuapp.com/get-points?initialDate=27/07/2023&endDate=28/07/2023&company-token-pg=UzvHVAgzFFuU9tj080UT&employee-token-pg=dqWBQAsDllyD8jA46eCp`
    
//     try {
//         const response = await axios.get(apiUrl)
//         return response.data
//     } catch(error) {
//         console.error('Erro na requisição:', error.message);
//     }
    
// };






 const requests = {
    cadastroEmpresa,
    // GetPoinst,
}

export default requests;