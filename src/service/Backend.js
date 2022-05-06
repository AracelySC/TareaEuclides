import axios from 'axios';
const BASE_URL = 'https://vercel.com/aracelysc/backend-euclides';
const backend = {
    getAprendizaje: async (data) => {

        const response = await axios.post(BASE_URL + '/aprendizaje/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
    getRecinto: async (data) => {

        const response = await axios.post(BASE_URL + '/recinto/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
    getSexo: async (data) => {

        const response = await axios.post(BASE_URL + '/sexo/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
    getAprendizaje2: async (data) => {

        const response = await axios.post(BASE_URL + '/aprendizaje2/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
    getProfesor: async (data) => {

        const response = await axios.post(BASE_URL + '/profesor/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
    getRedes: async (data) => {

        const response = await axios.post(BASE_URL + '/redes/get', { data })
            .then((response) => {
                return response.data[0];
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {

            });
        return response;
    },
}

export default backend;