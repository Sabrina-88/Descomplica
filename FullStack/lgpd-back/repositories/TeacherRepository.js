import Teacher from "../models/Teacher"

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
}

const getAllTeachers = async () => {
 return await Teacher.findAll({
    order:[
        ['id', 'ASC']
    ]
 });
}


const getTeacherById = async (id) => {
 return await Teacher.findByPk(id);
}

const deleteTeacherById = async (id) => {
 return await Teacher.destroy({ where: { id: id } });
}

const updateTeacherById = async (id, TeacherModel) => {
try {
    const result = await Teacher.update(TeacherModel, { where: { id: id } })
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
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
};

export default factory