import Course from "../models/Course"


const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save;
}

const getAllCourses = async () => {
 return await Course.findAll({
    order:[
        ['id', 'ASC']
    ]
 });
}


const getCourseById = async (id) => {
 return await Course.findByPk(id);
}

const deleteCourseById = async (id) => {
 return await Course.destroy({ where: { id: id } });
}

const updateCourseById = async (id, CourseModel) => {
try {
    const result = await Course.update(CourseModel, { where: { id: id } })
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
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
};


export default factory