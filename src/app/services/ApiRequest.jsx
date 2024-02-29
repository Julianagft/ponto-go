const axios = require('axios');

async function GetPoinst() {
    const apiUrl = `https://pontogo-api.herokuapp.com/get-points?initialDate=27/07/2023&endDate=28/07/2023&company-token-pg=UzvHVAgzFFuU9tj080UT&employee-token-pg=dqWBQAsDllyD8jA46eCp`
    
    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch(error) {
        console.error('Erro na requisição:', error.message);
    }
    
}

 const requisitions = {
    GetPoinst,
}

export default requisitions;