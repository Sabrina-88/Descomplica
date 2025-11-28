import User from "../models/User"

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
}

const getAllUsers = async () => {
 return await User.findAll({
    order:[
        ['id', 'ASC']
    ]
 });
}


const getUserById = async (id) => {
 return await User.findByPk(id);
}

const deleteUserById = async (id) => {
 return await User.destroy({ where: { id: id } });
}

const updateUserById = async (id, UserModel) => {
try {
    const result = await User.update(UserModel, { where: { id: id } })
    if (result[0] === 0) {
        return { message: "Atualizado com sucesso!!" };
    } else {
        return { message: "Nenhum registro foi atualizado.", status: 400 };
    }
} catch (error) {
    console.error(error);
    return { message: "Erro ao atualizar o usuário.", status: 500 };
}
}
const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
};

export default factory