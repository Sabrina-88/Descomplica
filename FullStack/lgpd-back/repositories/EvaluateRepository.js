import Evaluate from "../models/Evaluate"


const saveEvaluate = async (evaluateModel) => {
    const save = await Evaluate.create(evaluateModel);
    return save;
}

const getAllEvaluates = async () => {
 return await Evaluate.findAll({
    order:[
        ['id', 'ASC']
    ]
 });
}


const getEvaluateById = async (id) => {
 return await Evaluate.findByPk(id);
}

const deleteEvaluateById = async (id) => {
 return await Evaluate.destroy({ where: { id: id } });
}

const updateEvaluateById = async (id, EvaluateModel) => {
try {
    const result = await Evaluate.update(EvaluateModel, { where: { id: id } })
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
    saveEvaluate,
    getAllEvaluates,
    getEvaluateById,
    deleteEvaluateById,
    updateEvaluateById
};


export default factory