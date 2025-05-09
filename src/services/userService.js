import axios from '../axios';

const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUser = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const editUser = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

export {
    handleLoginAPI,
    getAllUsers,
    createNewUser,
    deleteUser,
    editUser,
    getAllCodeService
}