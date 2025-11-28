import UserRepository from  "../repositories/UserRepository";

const saveUser = (userModel) => {
    return UserRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return UserRepository.getUserById(id);
}

const getAllUsers = () => {
    return UserRepository.getAllUsers();
}


const deletetUserById = (id) => {
    return UserRepository.deleteUserById(id);
}

const updatetUserById = (id, userModel) => {
    return UserRepository.updateUserById(id, userModel);
}
const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deletetUserById,
    updatetUserById
};

export default service;